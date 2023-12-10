import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(

    private toastController: ToastController,
    private alertController: AlertController,

  ) {}
  
  async showToast( msg: any ){
    const toast = await this.toastController.create({ 
      message: msg, 
      duration: 5000 
    });
    toast.present();
  }
  async UserInactivo(){
    const alerta = await this.alertController.create({ 
      header: 'Usuario Inactivo ',
      message: 'Debe contactarse con el administrador para activar su cuenta.',
      buttons: ['OK'],   
    });
    await alerta.present();
    return;
  }
  async Error(){
    const alerta = await this.alertController.create({ 
      header: 'Error ',
      message: 'No se pudo realizar la operación.',
      buttons: ['OK'],    
    });
    await alerta.present();
    return;
  }
  async NoExiste(){
    const alerta = await this.alertController.create({ 
      header: 'Error ',
      message: 'El usuario no existe, debe registrarse.',
      buttons: ['OK'],   
    });
    await alerta.present();
    return;
  }
}
