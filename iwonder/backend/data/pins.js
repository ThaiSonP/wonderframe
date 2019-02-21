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


module.exports={
  getAllPins
}
