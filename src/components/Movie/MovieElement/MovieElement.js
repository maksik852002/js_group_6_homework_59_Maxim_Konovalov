import React, {Component} from 'react';

class MovieElement extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value 
  };

  render= () => {
    return (
      <div className="input-group mb-2 px-4">
        <input onChange={this.props.edit} type="text" className="form-control pr-2 mr-3" value={this.props.value}/>
        {this.props.children}
      </div>
    )
  };
};
  
export default MovieElement;