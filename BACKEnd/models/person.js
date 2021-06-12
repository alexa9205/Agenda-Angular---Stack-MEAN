const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true },
    surname: { 
        type: String, 
        required: true },
    age: { 
        type: Number, 
        required: true },
    dni: { 
        type: String, 
        required: true },
    birthday: {
        type: Date, 
        required: true },
    favouriteColour :{
        type: String, 
        required: true 
    },
    sex:{
        type: String,
        required: true
    },
    notes:{
        type: String, 
        required: true
    }
    
})


module.exports = mongoose.model('Persons', personSchema)
