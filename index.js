require('dotenv').config()
let express = require('express')
let request = require('request')
let app = express()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false}));


app.use('/tracks', require('./controllers/tracks'))




app.listen(process.env.PORT || 3000)