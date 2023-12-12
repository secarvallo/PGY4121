import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaskitoModule } from '@maskito/angular';
import { MapsModule } from './maps/maps.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,FormsModule, ReactiveFormsModule ,MaskitoModule,IonicModule.forRoot(), AppRoutingModule, HttpClientModule, MapsModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
