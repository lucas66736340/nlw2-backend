const express = require('express')
const routes = require('./routes')

//cors permite que o front end acesse a nossa aplicacao

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)