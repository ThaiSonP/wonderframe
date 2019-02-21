import React from 'react'
import {Link} from 'react-router-dom'
import "../css/edit.css"

export const Editpro = (user)=>{

const info = user.user
// console.log(info)

  return(
    <div className='container1'>
      <div className = 'editContainer'>
        <div className='delete'>
          <p>Are you sure you want to deactivate your account?</p>
          <button>Deactivate Account </button>
        </div>

          <form>

            <div className= 'editforms'>

              <div className='topForms'>

                  <label >Email Address </label>
                  <input type='text' placeholder={info.email}/>

                  <label >Password </label>
                  <input type='text'/>

                  <label >Username </label>
                  <input type='text' placeholder={info.name}/>

              </div>

              <div className="bottomForms">


                <div className='picture'>

                    <label >Current Picture </label>
                    <img src={`${info.pic}`} alt=''/>
                    <label>Change Picture </label>
                    <input type='text'/>

                </div>

                <div className='aboutme'>
                    <label>About You</label>
                    <input type = 'text' placeholder={info.bio}/>
                </div>

              </div>

            </div><br/>

            <div className="editfooter">
                <input type='submit' value='Save settings' className='save'/>
                <Link to={'/user/:id'}><button className='cancel'>Cancel</button></Link>
            </div>

          </form>

      </div>
    </div>
  )
}

export default Editpro
