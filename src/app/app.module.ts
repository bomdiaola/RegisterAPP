import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QRCodeModule } from 'angularx-qrcode';
//base de datos
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
//authentication
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';


const firebaseConfig = {
  apiKey: "AIzaSyC-AZpJIdvhGM_ROi3H7RiD4hkhRClyZe4",
  authDomain: "registerapp-88500.firebaseapp.com",
  projectId: "registerapp-88500",
  storageBucket: "registerapp-88500.appspot.com",
  messagingSenderId: "296746107956",
  appId: "1:296746107956:web:7ccf8a96b179d03ade7661",
  measurementId: "G-64FDJ30KRX"
};

@NgModule({
  declarations: [AppComponent],
  imports: [ 
    BrowserAnimationsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    QRCodeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, //Modulo de autenticacion de firebase
    AngularFirestoreModule //Modulo BDD de firebase
  ], 
    
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
