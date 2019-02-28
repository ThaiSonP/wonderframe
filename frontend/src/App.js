import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from './components/header.js'
import Editpro from './components/editpro.js'
import Profile from './components/profile.js'
import axios from 'axios'
import Pins from './components/pins.js'
import Onepin from './components/onepin.js'
import PostPin from './components/postpin.js'
import PostBoards from './components/postboards.js'

import './App.css';

class App extends Component {
  state = {
    userid:6,
    pins:[],
    user:[],
    search:'',
  }

getPins = ()=>{

  axios.get('/pins')
  .then(response=>{
    this.setState({
      pins:response.data.pins
    })
  })
  axios.get(`/users/${this.state.userid}`)
  .then(response=>{
    this.setState({
      user:response.data.body
    })
  })
}

componentDidMount = ()=>{
  this.getPins();
  // console.log(this.state)
  // debugger
  // this._ismounted=true
}
componentWillUnmount=()=>{
  // console.log("IT WORKS")
  this.setState({
    pins:null
  })
  // this._ismounted=false
  debugger
}


  render() {
    console.log(this.state)
    const {pins,user}=this.state
    return (
      <div className="App">
        <div>
          <button onClick={this.componentDidMount}> Mount</button>
          <button onClick={this.componentWillUnmount}> Unmount</button>
        </div>

        <Header user={user}/>
          <Switch>
            <Route exact path ='/'
              render={(props) => <Pins {...props} pin={this.state.pins} />}
              />
            <Route path ='/user/:id'
              render={(props) => <Profile {...props} user={this.state.user} />}
              />
            <Route path ='/edit'
              render={(props) => <Editpro
                {...props}
                user={this.state.user}
                testbutton = {this.createButtons}
              />}
              />
            <Route path ='/pins/:id'
              render={(props) => <Onepin {...props} pins={this.state.pins} />}
              />
            <Route path="/postpin"
              render={(props)=><PostPin{...props} user={this.state.userid}/>}
              />
            <Route path="/postboard"
              render={(props)=><PostBoards{...props} user={this.state.userid}/>}
              />
          </Switch>

      </div>
    );
  }

}

export default App;
