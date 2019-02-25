import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from './components/header.js'
import Editpro from './components/editpro.js'
import Profile from './components/profile.js'
import axios from 'axios'
import Pins from './components/pins.js'
import Onepin from './components/onepin.js'

import './App.css';

class App extends Component {
  state = {
    userid:5,
    pins:[],
    user:[],
    search:'',
    create:false
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

testbutton =()=>{
  this.setState({
    create: !this.state.create
  })
}

componentDidMount = ()=>{
  this.getPins()
}

createButtons = ()=>{
  if(this.state.create){
    return (
    <p> this is a thing</p>
    )
  }else{
    return null
  }
}

  render() {
    const {pins,user,create}=this.state
    // console.log(create)
    return (
      <div className="App">

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
                createButtons={this.createButtons}
                create = {this.state.create}
              />}
              />
            <Route path ='/pins/:id'
              render={(props) => <Onepin {...props} pins={this.state.pins} />}
              />
          </Switch>

      </div>
    );
  }
}

export default App;
