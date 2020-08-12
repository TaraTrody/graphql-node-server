const express = require('express');

const app = express()
const port = 3000;

app.get('/', (req,res) => {
  res.send('Hello Again Webpage')
}
)

app.listen(port)

console.log(`[app]: http://localhost:${port}`)