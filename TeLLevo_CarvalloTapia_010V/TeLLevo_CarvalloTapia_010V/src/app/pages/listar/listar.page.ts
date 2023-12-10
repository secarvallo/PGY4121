import { Component, OnInit } from '@angular/core';
import { RegisterCrudService } from 'src/app/servicios/register-crud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { InterfaceRegister, registers } from '../interfaces/InterfaceRegister';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage{
  
  users : InterfaceRegister[]= [];

  constructor(

    private registerService: RegisterCrudService,
    private loadingCtrl : LoadingController,

  ) { }

  ionViewWillEnter(){
    this.listarUsers();
  }

  async listarUsers(){

    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'circles',
      duration: 5000,
    });

    await loading.present();

    try {
      this.registerService.ListarRegister().subscribe({
        next: (data) => {
          console.log(data);
          loading.dismiss();
          let listString = JSON.stringify(data);
          this.users = JSON.parse(listString);
          //event?.target.complete();
          console.log(this.users);
        },
      });
    } catch (error) {
      console.log(error);
      loading.dismiss();
    }
  }
}
