import { Component } from '@angular/core';
interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente[] = [
    {
      name: 'Sign in',
      redirecTo: '/login',
      icon: 'person-circle-sharp'
    },
    {
      name: 'Register',
      redirecTo: '/register',
      icon: 'id-card'
    },
    {
      name: 'Listar',
      redirecTo: '/listar',
      icon: 'reader'
    },
    {
      name: 'Weather',
      redirecTo: '/weather',
      icon: 'rainy'
    },
    {
      name: 'Maps',
      redirecTo: '/maps',
      icon: 'map'
    },
  ]
  
}
