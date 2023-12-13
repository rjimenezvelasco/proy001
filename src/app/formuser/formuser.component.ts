import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { User } from '../model/user';
import { CreateFormService } from '../service/create-form.service';


@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.css']
})
export class FormuserComponent {
  public formulario!: FormGroup;
  public user!:User;

  constructor(private fb: FormBuilder,private serv:CreateFormService){}

  ngOnInit(): void {
    this.formulario = this.fb.group({  
      name: ['', Validators.required],
      email: ['', Validators.required]   
    });
  }

  onSubmit(form:any){
    console.log("entro");
      //console.log("compania ",form);
     
      console.log(form.value.name);
      console.log(form.value.email);
      this.user = this.formulario.value;
      console.log(this.user);
     this.serv.addUser(this.user).subscribe((response:any)=>{
        console.log(response);
      });
    
  }
}
