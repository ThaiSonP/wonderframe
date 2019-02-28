const db = require ('./index')

const getAllUsers = (req,res)=>{
  db.any('select * from users')
  .then(results=>{
    res.status(200)
      .json({
      message: 'these are all the users',
      users:results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getSingleUser = (req,res)=>{
  const id = req.params.id;
  db.one('SELECT * FROM users WHERE id = $1',id)
  .then(result=>{
    res.status(200)
      .json({
      message: 'this is ONE user',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

const makeUser = (req,res)=>{
  const body = req.body
  db.none('INSERT INTO users (name,password,email,bio,pic) values (${name},${password},${email},${bio},${pic})',body)
  .then(result =>{
    res.status(200)
      .json({
      message: 'user has been created'
    })
  }).catch(err=>{
    console.log(err)
  })
}

const patchUser = (req,res)=>{
  db.none(
    "UPDATE users SET name=${name}, password=${password}, email=${email}, bio=${bio}, pic=${pic} WHERE id=${id}",
    {
      name:req.body.name,
      password:req.body.password,
      email:req.body.email,
      bio:req.body.bio,
      pic:req.body.pic,
      id:parseInt(req.params.id)
    }
  ).then(()=>{
    res.status(200)
      .json({
      message: 'user has been updated'
    })
  }).catch(err=>{
    console.log(err)
  })
}

const deleteUser = (req,res)=>{
  const id=req.params.id
  db.none('DELETE from users where id=$1',[id])
  .then(results=>{
    res.status(200)
      .json({
      message:'user deleted'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports ={
  getAllUsers,
  getSingleUser,
  makeUser,
  patchUser,
  deleteUser
}
