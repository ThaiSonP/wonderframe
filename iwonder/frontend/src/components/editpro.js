import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import "../css/edit.css"
import axios from 'axios'

class Editpro extends Component{
constructor(props){
  super(props)
  this.state={
    name:'',
    password:'',
    email:"",
    bio:"",
    pic:"",
    test:""
  }
}

handleChange=(event)=>{
  this.setState({
    [event.target.name]:event.target.value})
}

patchProfile=()=>{
  const {name,password,email,bio,pic,test}=this.state
  const id = this.props.user.id

  if(Object.values(this.state)){
    axios.patch(`users/${id}`,{
      name: name,
      password:password,
      email:email,
      bio:bio,
      pic:pic,
      id:id
    })
    .then(response=>{
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
  }else{
    return "fill out form"
  }
}

handleSubmit=(e)=>{
  e.preventDefault();
  this.patchProfile()
}

deleteUser=()=>{
  const {id}=this.state
  axios.delete(`/users/${id}`)
  .then(response=>{
    console.log(response)
  }).catch(err=>{
    console.log(err)
  })
}

render(){
  // console.log(this.props.user)
  // console.log(Object.values(this.state))

  const info = this.props.user
// console.log(info)
  return(
    <div className='container1'>
      <div className = 'editContainer'>
        <div className='delete'>
          <p>Are you sure you want to deactivate your account?</p>
          <button onClick={this.deleteUser}>Deactivate Account </button>
        </div>

          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>

            <div className= 'editforms'>

              <div className='topForms'>

                  <label >Email Address </label>
                  <input  type='text' placeholder={info.email} name='email'/>

                  <label >Password </label>
                  <input type='text' name = 'password'/>

                  <label >Username </label>
                  <input type='text' placeholder={info.name} name='name'/>

              </div>

              <div className="bottomForms">


                <div className='picture'>

                    <label >Current Picture </label>
                    <img src={`${info.pic}`} alt=''/>
                    <label>Change Picture </label>
                    <input type='text' name='pic'/>

                </div>

                <div className='aboutme'>
                    <label>About You</label>
                    <input type = 'text' placeholder={info.bio} name='bio'/>
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
}

export default Editpro
