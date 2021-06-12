import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonModel } from './../../interfaces/persona';
import { PersonService } from './../../service/person.service'


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit {
  
  do: String = "insert"
  position: any = 0

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

  favouriteColours = [
    { id: "Rojo", value: 'Rojo' },
    { id: "Azul", value: 'Azul' },
    { id: "Amarillo", value: 'Amarillo' },
    { id: "Verde", value: 'Verde' }
  ];

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.personService.getPersons().subscribe(data =>{
      this.persons = data;
    })
  }


  add( form : NgForm ){
    
    if( this.do === 'insert' ){

      let birthDate  = new Date(this.person.birthday);
      let day = birthDate.getDay();
      let month = birthDate.getMonth();
      let year = birthDate.getFullYear();
      let ageNum = parseInt(this.person.age)

      this.person.birthday = `${day}/${month}/${year}`

      let _that = this
      this.personService.registerPerson(this.person ).subscribe(( res )=>{
        this.personService.getPersons().subscribe(( data: Array<PersonModel>)=>{
          _that.persons = data 
        })
      })

      if(ageNum > 0 && ageNum <= 125){
      this.persons.push( this.person )
      }
      
      
    }
    else{
      this.persons[ this.position ] = this.person
     
        this.do = 'insert'
  
    
    }

    form.resetForm()
  
  }
    


  delete( id: string)    : void {

    let _that = this
    this.personService.deletePerson(`${id}`).subscribe(( res )=>{
      this.personService.getPersons().subscribe(( data: Array<PersonModel>)=>{
        _that.persons = data 
      })
  })
}

  update( upPosition: number ) : void {
    this.person  = this.persons[ upPosition ];
   
    this.position = upPosition
  
  }

  
   
  }
  





