import { Component, OnInit } from '@angular/core';
import { RegisterCrudService } from 'src/app/servicios/register-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  user = {
    id: 0,
    username: '',
    email: '',
    phoneNumber: 569,
    password: '',
    confirmPassword: '',
  };

  constructor(
    private registerService: RegisterCrudService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUserById( this.getIdFromUrl() );
  }

  getIdFromUrl(){
    let url = this.router.url;
    let arr = url.split('/', 3);
    let id = parseInt( arr[2]);
    return id;
  }

  getUserById(usersId: number) {
    this.registerService.BuscarUserId(usersId).subscribe((data: any) => {
      this.user = {
        id: data[0].id,
        username: data[0].username,
        email: data[0].email,
        phoneNumber: data[0].phoneNumber,
        password: data[0].password,
        confirmPassword: data[0].confirmPassword,
      };
    });
  }
  

  deleteUser(){
    this.registerService.DeleteUser(this.user).subscribe()
    this.router.navigate(['/listar'])
  }
}
