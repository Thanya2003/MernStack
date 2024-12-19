const express = require('express')
const path = require('path');
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,'index.html')))
app.get('/hello/:name', (req, res) => {
  res.send('Hello World! '+req.params.name)
})
app.get('/about', (req, res) => {
    // res.send()
    // res.sendFile(path.join(__dirname,'index.html'))
    // res.status(500)
    res.json({"harry": 34})
  })

//   middleware
// const handlemiddleware=(req, res, next)=>{
//     console.log(req);
//     next();
// }
// app.use(handlemiddleware);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})