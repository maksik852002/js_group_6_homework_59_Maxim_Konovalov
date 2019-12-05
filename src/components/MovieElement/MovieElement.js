import React, {Component} from 'react';

class MovieElement extends Component {

  shouldComponentUpdate(nextProps) {
    console.log('[el] shoulUpdate')
    console.log(this.props.value !== nextProps.value)
    return this.props.value !== nextProps.value 
  }

  render= () => {
    console.log('[el] render')
    return (
      <div className="input-group mb-2 px-4">
        <input onChange={this.props.edit} type="text" className="form-control pr-2" value={this.props.value}/>
        <div className="input-group-append">
          <button onClick={this.props.remove} className="btn close" type="button">x</button>
        </div>
      </div>
    )
  }
}
  
export default MovieElement;