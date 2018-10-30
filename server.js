let express = require('express')
let app = express()
let routes = require('./routes/index')

///Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(express.static(path.join(__dirname, '/public')))

////routes
app.use('/', routes)

///Connecting to local server
let PORT = process.env.PORT || 3200

app.listen(PORT, () => {

    console.log(`Server is listening on PORT: ${PORT}`)
}) 