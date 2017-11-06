import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyABDCGLIXgnzO1CQ7YPJQGZMbfTBd8jdps',
  authDomain: 'chatapper-250da.firebaseapp.com',
  databaseURL: 'https://chatapper-250da.firebaseio.com',
  projectId: 'chatapper-250da',
  storageBucket: '',
  messagingSenderId: '838858243256'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
