const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const PORT = 3000



const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())


//rutas
app.use('/person', require('./routes/personRouter'))

const baseD = 'mongodb://localhost/angular-users'
mongoose.connect(baseD, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log("Conectado a la base de datos")
})





app.listen( PORT , ()=>{
    console.log('Servidor corriendo en el puerto', PORT)
})