const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! this is v4.6'))
app.get('/health', (req, res) => res.send('Health check status: ok'))

app.listen(3000, () => console.log(`Example app listening at http://localhost:${port}`))
