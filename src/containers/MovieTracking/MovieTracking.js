import React, {Component} from 'react';
import InputGroup from '../../components/InputGroup/InputGroup';
import MovieElement from '../../components/MovieElement/MovieElement';
import nanoid from 'nanoid';

class MovieTracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieElement:JSON.parse(localStorage.getItem('movieElement')),
      inputValue:'',
    }
  }
  
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
  }

  editMovieElement = (e,id) => {
    const index = this.state.movieElement.findIndex(m=> m.id === id);
    const movieElement =[...this.state.movieElement];
    movieElement[index].value = e.target.value;
    localStorage.setItem('movieElement', JSON.stringify(movieElement));
    this.setState({movieElement});
  }

  removeMovieElement = (id) => {
    const index = this.state.movieElement.findIndex(m=> m.id === id);
    const movieElement =[...this.state.movieElement];
    movieElement.splice(index, 1)
    localStorage.setItem('movieElement', JSON.stringify(movieElement));
    this.setState({movieElement});
  }

  render = () => {
    return (
      <div style={{height:'500px', margin: '20px auto', overflow:'auto'}} className="w-75 border border-secondary rounded">
          <InputGroup
            inputValue = {(e) => this.addInputValue(e)} 
            addElement = {(e) => this.addMovieElement(e)}
            clearinputValue = {this.state.inputValue}
          />
          {this.state.movieElement.map(el => (
            <MovieElement
              key={el.id}
              value = {el.value}
              edit = {(e) => this.editMovieElement(e,el.id)}
              remove = {() => this.removeMovieElement(el.id)}
            />
          ))}
      </div>
    )
  }
};

export default MovieTracking;