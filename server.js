require('dotenv').config()

let express = require('express')
let app = express()
let routes = require('./routes/index')
let bodyParser = require('body-parser')
let methodOverride = require('method-override')

///Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
// app.use(express.static(path.join(__dirname, '/public')))

////routes
app.use('/', routes)

////connecting views
app.set('view engine', 'hbs')

///Connecting to local server
let PORT = process.env.PORT || 3200

app.listen(PORT, () => {

    console.log(`Server is listening on PORT: ${PORT}`)
}) 