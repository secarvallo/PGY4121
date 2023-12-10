import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { RegisterCrudService } from 'src/app/servicios/register-crud.service';
import { MessageService } from 'src/app/message/message.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata : any;

  user = {
    id : 0,
    username : '',
    email : '',
    phoneNumber : 569,
    password : '',
    confirmPassword : '',
    role : '',
    isactive : true,
  }

  formLogin: FormGroup;
  passwordFieldType: string = 'password';

  constructor(
    private router: Router,
    private authService: AuthService,
    private registerService: RegisterCrudService,
    private messageService: MessageService,
    private formBuild: FormBuilder,
  ) { 
    this.formLogin= this.formBuild.group({
      'username': new FormControl("", [Validators.minLength(4)]),
      'password': new FormControl("", [Validators.minLength(4)]),
    })
  }

  ngOnInit() {
  }

  loginUser(){
    if (this.formLogin.valid) {
      this.authService.GetUserById(this.formLogin.value.username).subscribe( data => {
        this.userdata = data;
        console.log(this.userdata);
        if (this.userdata.length > 0){
          this.user = {
            id : this.userdata[0].id,
            username : this.userdata[0].username,
            email : this.userdata[0].email,
            phoneNumber : this.userdata[0].phoneNumber,
            password : this.userdata[0].password,
            confirmPassword : this.userdata[0].confirmPassword,
            role : this.userdata[0].role,
            isactive : this.userdata[0].isactive,
          };
        console.log( data );
        console.log(this.user.password);
        if (this.user.password == this.formLogin.value.password){
          if (this.user.isactive == true){
            sessionStorage.setItem('username', this.user.username);
            sessionStorage.setItem('userrole', this.user.role);
            sessionStorage.setItem('ingresado', 'true');
            this.messageService.showToast('Bienvenido ' + this.user.username);
            this.router.navigateByUrl('/listar');
          }else{
            this.messageService.UserInactivo();
            console.log('Usuario inactivo');
          }
        }else{
          this.messageService.Error();
          console.log('Error de credenciales');
        }
      }else{
        this.messageService.NoExiste();
      }
    });  
   }
  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}

