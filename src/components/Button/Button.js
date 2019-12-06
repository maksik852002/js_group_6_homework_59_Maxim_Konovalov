import React, {Component} from 'react';

class Button extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.label !== nextProps.label 
  };

  render =() => {
    return(
      <button
        onClick={this.props.click?this.props.click:null}
        className={`btn ${this.props.addClass==='close' ? this.props.addClass : ['btn', this.props.addClass].join('-')}`}
        type={this.props.type}
      >
        {this.props.label}
      </button>
    )
  };
};

export default Button;