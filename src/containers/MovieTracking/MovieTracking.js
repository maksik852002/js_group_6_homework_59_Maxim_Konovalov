import React, {Component} from 'react';
import InputGroup from '../../components/Movie/InputGroup/InputGroup';
import MovieElement from '../../components/Movie/MovieElement/MovieElement';
import Button from '../../components/Button/Button'
import nanoid from 'nanoid';

class MovieTracking extends Component {
  constructor(props) {
    super(props);
    const parseLocalItem = JSON.parse(localStorage.getItem('movieElement'));
    this.state = {
      movieElement: parseLocalItem ? parseLocalItem : [],
      inputValue:'',
    };
  };
  
  addInputValue = (e) =>{
    let inputValue = this.inputValue;
    inputValue = e.target.value;
    this.setState({inputValue});
  };

  addMovieElement = (e) => {
    e.preventDefault();
    let movieElement = [...this.state.movieElement];
    let inputValue = this.state.inputValue;
    inputValue = '';
    movieElement.push({value:this.state.inputValue, id:nanoid()});
    localStorage.setItem('movieElement', JSON.stringify(movieElement));
    this.setState({movieElement, inputValue});
  };

  editMovieElement = (e,id) => {
    const index = this.state.movieElement.findIndex(m=> m.id === id);
    const movieElement = [...this.state.movieElement];
    const element = {...movieElement[index]};
    element.value = e.target.value;
    movieElement[index] = element;
    localStorage.setItem('movieElement', JSON.stringify(movieElement));
    this.setState({movieElement});
  };

  removeMovieElement = (id) => {
    const index = this.state.movieElement.findIndex(m=> m.id === id);
    const movieElement =[...this.state.movieElement];
    movieElement.splice(index, 1)
    localStorage.setItem('movieElement', JSON.stringify(movieElement));
    this.setState({movieElement});
  };

  render = () => {
    return (
      <div style={{height:'800px',overflow:'auto'}} className="my-2 border border-secondary rounded">
          <InputGroup
            inputValue = {(e) => this.addInputValue(e)} 
            addElement = {(e) => this.addMovieElement(e)}
            clearinputValue = {this.state.inputValue}
          >
            <Button
                addClass='outline-secondary'
                type='submit'
                label='Add'
              />
          </InputGroup>
          {this.state.movieElement.map(el => (
            <MovieElement
              key={el.id}
              value = {el.value}
              edit = {(e) => this.editMovieElement(e,el.id)}
            >
              <Button
                addClass='close'
                type='button'
                label='x'
                click={() => this.removeMovieElement(el.id)}
              />
            </MovieElement>
          ))}
      </div>
    )
  };
};

export default MovieTracking;