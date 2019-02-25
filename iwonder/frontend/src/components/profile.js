import React,{Component} from 'react'
import '../css/profile.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state={
      profileId:parseInt(Object.values(this.props.match.params)),
      userInfo:[]
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


render(){
  // console.log(this.props)
  const {name,bio,pic}=this.state.userInfo
  
  return (
    <>
    <div className = 'profile1'>

      <div className = 'header1'>
        <button>Create Things</button>
        <Link to='/edit'><button>Edit Profile</button> </Link>
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
