import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { User } from '../model/user';
import { CreateFormService } from '../service/create-form.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public formulario!: FormGroup;
  public user!:User;

  constructor(private fb: FormBuilder,private userservice:CreateFormService){}

  ngOnInit(): void {
    this.formulario = this.fb.group({  
      name: ['', Validators.required],
      email: ['', Validators.required]   
    });
  }

  buildForm() {
    this.formulario = new FormGroup({
     
      name: new FormControl(''),
      
      email:new FormControl(''),
      
    });
  }

  onSubmit(form:any){
    console.log("entro");
      //console.log("compania ",form);
     
      console.log(form.value.name);
      console.log(form.value.email);
/*
      this.user = this.formulario.value;
      this.userservice.addUser(this.user).subscribe((response:any)=>{
        console.log(response);
      });
      */
  }
}
