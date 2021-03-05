import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
@Component({
  selector: 'app-c-nav',
  templateUrl: './c-nav.component.html',
  styleUrls: ['./c-nav.component.css']
})
export class CNavComponent implements OnInit {

  constructor(public auth: AngularFireAuth)
  {

  }
  
  logout() 
  {
    this.auth.signOut();
  }

  ngOnInit(): void {
  }

}
