const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surnames: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    favouriteColour: {
        type: String,
        required: true,
        enum:["None", "Rojo", "Azul", "Verde", "Amarillo"]   
    },
    sex: {
        type: String,
        required: true,
        enum:["Hombre", "Mujer", "Otro", "No especificado"]
    },
    notes: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model('Persons', personSchema)