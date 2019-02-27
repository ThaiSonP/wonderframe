import React, {Component} from 'react';

class PostBoards extends Component{
  constructor(props){
    super(props)
    this.state={
      name:null,
      user_id:props.user,
      description:null
    }
  }
  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault();
  }
  render(){
    // console.log(this.props.user)
    console.log(this.state)
    return(
      <div>
        This is the create board form
      </div>
    )
  }

}
export default PostBoards
