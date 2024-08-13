
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 8000

app.get('/', (req, res) => {
    res.send('hello world')
  })
  
app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
  })