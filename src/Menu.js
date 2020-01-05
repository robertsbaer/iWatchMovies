import React, { Component } from 'react';
import NavBar from 'react-responsive-menubar/lib/NavBar';
import { Link } from 'react-router-dom';
import './App.css'
 
class Menu extends Component {
 
  state = {showSideNav:false}
 
  handleSideNavToggle = ()=>{
      this.setState((currentState)=>{
          return {showSideNav: !currentState.showSideNav}
      })
  }
 
 render(){
   //Position of navbar container (header in this case) should be set torelative.
  return(
      <header className="header" style={{position:"relative"}}>
          <NavBar 
          handleSideNavToggle={this.handleSideNavToggle} 
          logo={'https://picsum.photos/200/300?image=1'} 
          showSideNav={this.state.showSideNav} 
          logoStyles={{height:"65px", width:"85px"}} 
          navBarStyles={{boxShadow:"none"}} 
          linkStyles={{color:"green", fontWeight:"bold"}}>
 
              <Link to="/AllMovies">All Movies</Link>
              <Link to="/AddMovies">Add Movies</Link>
              <Link to="/DeleteMovies">Delete Movies</Link>
              <Link to="/UpdateMovies">Update Movies</Link>
          </NavBar>
      </header>
  )
 }
}

export default Menu