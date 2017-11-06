import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export class Message {
message: string;
name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  itemsCol: AngularFireList<Message>;
  items: Observable<Message[]>;
  name: any;
  msgVal: string = '';
  afList: any ;
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    // this.itemsCol = db.list('/messages', ref => ref.orderByChild('name'));
    this.itemsCol = db.list('/messages');
    this.items = this.itemsCol.valueChanges();
    afAuth.authState.subscribe(
      auth => {
      if (auth) {
        this.name = auth;
      }
    }
  );
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  chatSend(theirMessage: string) {
    const msg = new Message();
    msg.message = theirMessage;
    msg.name = this.name.displayName;
    this.itemsCol.push(msg);
    this.msgVal = '';
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
