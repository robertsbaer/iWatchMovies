import React, { Component } from 'react';
import './App.css'


class AllMovies extends Component {
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
      const { posts } = this.state;
      return (
        <div className="container">
          <div class="jumbotron">
            <h1 class="display-4">All Movies List</h1>
          </div>
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <div className="card-header">
                Movie: {post.id} {post.title}
              </div>
              <div className="card-body">
                <p className="card-text">popularity: {post.popularity}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  export default AllMovies