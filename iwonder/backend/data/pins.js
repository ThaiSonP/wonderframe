const db = require  ('./index')

const getAllPins = (req,res)=>{
  db.any('select * from pins')
  .then(results=>{
    res.status(200)
      .json({
      message: 'these are ALL the pins',
      pins: results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getOnePin = (req,res)=>{
  const id = req.params.id;
  db.one('select * from pins where id = $1',id)
  .then(result=>{
    res.status(200)
    .json({
      message:'this is one pin',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

const postPin = (req,res)=>{
  const body = req.body
  db.none('INSERT INTO pins (user_id,image,title,board_id,description) VALUES (${user_id},${image},${title},${board_id},${description})',body)
  .then(result=>{
    res.status(200)
    .json({
      mesage:'post has been created'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports={
  getAllPins,
  getOnePin,
  postPin
}
