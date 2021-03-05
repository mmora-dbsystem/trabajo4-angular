import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-c-loguin',
  templateUrl: './c-loguin.component.html',
  styleUrls: ['./c-loguin.component.css']
})
export class CLoguinComponent implements OnInit {

  constructor(public auth: AngularFireAuth)
  {

  }
  login()
  {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  logout() 
  {
    this.auth.signOut();
  }

  ngOnInit(): void {
  }
}
