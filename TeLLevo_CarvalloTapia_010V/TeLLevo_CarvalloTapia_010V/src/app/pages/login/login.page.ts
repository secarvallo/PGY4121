import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  passwordFieldType: string = 'password';

  constructor(
    private formBuild: FormBuilder,

  ) { 

    this.formularioLogin= this.formBuild.group({
      'username': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)

    })
  }
  ngOnInit() {
  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}

