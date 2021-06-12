const Persons = require('./../models/person')

const personCtrl = {
    getPersons: async (req, res) =>{
        try {
            const person = await Persons.find({})
            if(!person) return res.status(400).json({message: "No hay usuarios"})

            res.json(person)
        } catch (err) {
            return res.status(500).json({message: err.message})
        }
    },

    getPerson: async (req, res, next) =>{
          try {
             const {id} = req.params.id
             const person = await Persons.findById(id);
             res.json(person);


          } catch (error) {
            return res.status(500).json({message: err.message})
          }
    },

    registerPerson: async (req, res) =>{
        try {
            const {name, surname, age, dni, birthday, favouriteColour, sex, notes} = req.body;

            const person = await Persons.findOne({dni})
            if(person) return res.status(400).json({message: "Esta persona ya esta registrada"})


            if(!isNaN(name))
                return res.status(400).json({message: "El nombre puede contener solo letras, por favor"})
            

            const newPerson = new Persons({
                name, 
                surname, 
                age, 
                dni, 
                birthday, 
                favouriteColour, 
                sex, 
                notes
            })

            // Save mongodb
            await newPerson.save()

            res.json({newPerson})

        } catch (err) {
            return res.status(500).json({message: err.message})
        }
    },
    editPerson : async (req, res, next) => {
     try {
        const { id } = req.params;
        await Persons.findByIdAndUpdate(id, 
            {$set: req.body}, {new: true});
        res.json({ status: "Persons Updated" });
     } catch (error) {
        return res.status(500).json({message: err.message})
     }
      },
    
      deletePerson: async (req, res) => {
        try {
        await Person.findByIdAndRemove(req.params.id);
        res.json({ status: "Person Deleted" });
        } catch (error) {
            return res.status(500).json({message: err.message})
        }
      }
}


module.exports = personCtrl