const express    = require("express")
const mongoose = require("mongoose")
const morgan    = require("morgan")
const bodyParser = require("body-parser")
const TaskRoute = require ("./routes/task")
mongoose.connect('mongodb://127.0.0.1:27017/taskdb')
const db = mongoose.connection

db.on('error' , (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Establsihed')
})


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})

app.use('/api/task', TaskRoute)