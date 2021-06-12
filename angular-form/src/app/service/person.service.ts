import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PersonModel } from './../interfaces/persona'

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  

  person: PersonModel = {
    _id: "",
    name: "",
    surnames: "",
    age: "",
    dni: "",
    birthday: "",
    favouriteColour: "",
    sex: "",
    notes: ""
}

persons: Array<PersonModel> = []

  readonly URL_API = "http://localhost:5000/person/";

  constructor(private http: HttpClient) {
   this.person =  new PersonModel();
  }

  registerPerson(person: PersonModel) {
    return this.http.post(this.URL_API, person);
  }

  getPersons() {
    return this.http.get<PersonModel[]>(this.URL_API);
  }

  editPerson(person: PersonModel) {
    return this.http.put(this.URL_API + `/${person._id}`, person);
  }

  deletePerson(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}


