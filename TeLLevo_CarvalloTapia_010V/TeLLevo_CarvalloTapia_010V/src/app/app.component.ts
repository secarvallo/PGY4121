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
      name: 'login',
      redirecTo: '/login',
      icon: 'person-circle-sharp'
    },
  ]
}
