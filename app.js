const express    = require('express')
const app        = express()

//route
const instagram  = require('./routers/instagram')

// index
app.use('/', instagram)

//app listen
app.listen(3000, ()=>{
  console.log('Running app on port 3000!')
})