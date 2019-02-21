import React from 'react'
import '../css/profile.css'
import {Link} from 'react-router-dom'

export const Profile = (user)=>{
  const {name,bio,pic}=user.user

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

export default Profile
