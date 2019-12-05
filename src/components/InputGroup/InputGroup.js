import React from 'react';

const InputGroup = props => (
  <form className='p-4' onSubmit = {props.addElement}>
    <div className="input-group mb-3">
      <input onChange={props.inputValue} type="text" required className="form-control" value={props.clearinputValue}/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
      </div>
    </div>
    <p>To watch list:</p>
  </form>
)

export default InputGroup;