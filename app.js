const express    = require('express')
const app        = express()
const cors       = require('cors')

//route
const instagram  = require('./routers/instagram')

app.use(cors())

// index
app.use('/', instagram)

//app listen
app.listen(3000, ()=>{
  console.log('Running app on port 3000!')
})
