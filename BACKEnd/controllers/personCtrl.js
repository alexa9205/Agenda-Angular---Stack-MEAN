
const Persons = require("../models/person");

const personCtrl = {};

personCtrl.getPersons = async (req, res, next) => {
  const persons = await Persons.find();
  res.json(persons);
};

personCtrl.createPerson = async (req, res, next) => {
  const person = new Persons({
    name: req.body.name,
    surnames: req.body.surnames, 
    age: req.body.age, 
    dni: req.body.dni, 
    birthday: req.body.birthday, 
    favouriteColour: req.body.favouriteColour, 
    sex: req.body.sex, 
    notes: req.body.notes
  });
  await person.save();
  res.json({ status: "Persona creada en la agenda ! " });
};

personCtrl.getPerson = async (req, res, next) => {
  const { id } = req.params;
  const person = await Persons.findById(id);
  res.json(person);
};

personCtrl.editPerson = async (req, res, next) => {
  const { id } = req.params;
  await Persons.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Persona modificada" });
};

personCtrl.deletePerson = async (req, res, next) => {
  await Persons.findByIdAndRemove(req.params.id);
  res.json({ status: "Persona borrada de la agenda" });
};

module.exports = personCtrl;
