import React, {Component} from 'react';
import Joke from '../../components/Jokes/Joke/Joke';
import Button from '../../components/Button/Button';

class JokeApp extends Component {

  state = {
    jokes:[],
  };
  
  componentDidMount() {
   this.getJokes();
  };

  getJokes = async () => {
    const jokes = [...this.state.jokes];
    jokes.splice(0, jokes.length)
    let promises = [];
    for(var i=0;i<5;i++) {
      promises.push(await fetch('https://api.chucknorris.io/jokes/random').then(response => response.ok&&response.json()));
    }
    Promise.all(promises)
    .then(result => this.setState({jokes:result}))
  };

  render = () => {
    return (
      <div style={{height:'800px', overflow:'auto'}} className="my-2 border border-secondary rounded">
        <Button
          addClass='secondary'
          type='button'
          label='Next'
          click={this.getJokes}
        />
        {this.state.jokes.map(joke => (
          <Joke
            key={joke.id}
            text={joke.value}
            ava={joke.icon_url}
            date={joke.created_at}
          />
        ))}
      </div>
    )
  };
};

export default JokeApp;