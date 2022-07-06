const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

// this renders the homepage according to index.js file.
app.get('/', (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// this will be used to insert given fields to v_complaints table of the db; not built yet!
app.post('/', (req, res) => {
    res.send('Got a POST request')
  })