import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    
    this.buildForm();
  }

  buildForm() {
    this.formulario = new FormGroup({
      name: new FormControl(''),
      email:new FormControl(''),
      telefono: new FormControl(''),
      direccion:new FormControl(''),
    });
  }

  
  enviarFormulario(form:any){
    console.log('name',form.value.name);
    console.log('email',form.value.email);
    console.log('telefono',form.value.telefono);
    //console.log(form.nombre);
  }
  
  
}
