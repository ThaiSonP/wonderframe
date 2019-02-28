import React,{Component} from 'react'
import '../css/profile.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Buttons from './buttons'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state={
      profileId:parseInt(Object.values(this.props.match.params)),
      userInfo:[],
      displayButton: false
    }
  }

  componentDidMount(){

    const {profileId} = this.state

    //we make a seperate axios call for indvidual pins
    axios.get(`/users/${profileId}`)
    .then(response=>{
      this.setState({
        userInfo:response.data.body
      })
    }).catch(err=>{
      console.log(err)
    })

  }

  testbutton =()=>{
    this.setState({
      displayButton: !this.state.displayButton
    })
  }

render(){
  // console.log(this.state.displayButton)
  const {name,bio,pic}=this.state.userInfo

  return (
    <>
    <div className = 'profile1'>

      <div className = 'header1'>
        <Buttons displayButton={this.state.displayButton} testbutton={this.testbutton}/>
        <Link to='/edit'><button><img src='http://www.free-icons-download.net/images/pencil-symbol-icon-63234.png' alt=''/></button> </Link>
      </div>

      <div className = 'body1'>
        <div className = "body2">
          <div className='biotext'><h2>{name}</h2></div>
          <div className='biotext'><p>{bio}</p></div>
        </div>

        <div className = "body3">
          <img src={pic} alt='' className='profilepic'></img>
        </div>

      </div>

      <div className = "body4">
        <button>Boards</button>
        <button>Pins</button>
      </div>

    </div>

    </>
    )
  }
}
export default Profile
