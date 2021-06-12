export class PersonModel{
  constructor(
    _id = "",
    name = "",
    surnames = "",
    age = "",
    dni = "",
    birthday = new Date(),
    favouriteColour = "",
    sex = "",
    notes = "",
  ){
    this._id = _id;
    this.name = name;
    this.surnames = surnames;
    this.age = age;
    this.dni = dni;
    this.birthday = birthday;
    this.favouriteColour = favouriteColour;
    this.sex = sex;
    this.notes = notes;
   
  }

      _id: string;
    name: string;
    surnames: string;
    age: any;
    dni: string;
    birthday: any;
    favouriteColour: string;
    sex: string;
    notes: string
}

// export interface Person {
//     _id: String,
//     name: String,
//     surnames: String,
//     age: any,
//     dni: String,
//     birthday: any,
//     favouriteColour: String,
//     sex: String,
//     notes: String
//   }