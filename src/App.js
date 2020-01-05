import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import AllMovies from './AllMovies'
import AddMovies from './AddMovies'
import DeleteMovies from './DeleteMovies'
import UpdateMovies from './UpdateMovies'
import Menu from './Menu'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "https://iwatchmovies.herokuapp.com/movies";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }

  render() {
    
    return (
      <Router>
      <div className="container">
      <Menu />
        <Switch>
          <Route path ="/AllMovies" exact component={AllMovies}/>
          <Route path ="/AddMovies" exact component={AddMovies}/>
          <Route path ="/DeleteMovies" exact component={DeleteMovies}/>
          <Route path = "/UpdateMovies" exact component={UpdateMovies}/>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;