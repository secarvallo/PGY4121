import { Component, OnInit } from '@angular/core';
import { InterfaceRegister, registers } from '../interfaces/InterfaceRegister';
import { RegisterCrudService } from'src/app/servicios/register-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  newRegister: registers = {
    username: '',
    email: '',
    phoneNumber: 569,
    password: '',
    confirmPassword: '',
    role : '',
    isactive : true,
  };
  
  showPassword = false;

  constructor( 

    private registerService: RegisterCrudService,
    private router: Router,

    ) {}
  
  ngOnInit() {
  }

  crearRegister(){
    console.log(this.newRegister);
    this.registerService.CrearRegister(this.newRegister).subscribe();
    this.router.navigateByUrl('/listar');
  }

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }
  vaidatephoneNumber(event: any ){
    if (event && event.target) {
      let phoneNumber = event.target.value;
      phoneNumber = phoneNumber.replace(/\D/g, '');
  
      if (phoneNumber.length > 8) {
        phoneNumber = phoneNumber.slice(0, 8);
      }
      event.target.value = phoneNumber;
    }
  }
}

