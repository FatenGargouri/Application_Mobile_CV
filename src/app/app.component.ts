import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private router:Router , private authServ: AuthentificationService ) {
    this.login();
  }
  login() {
    console.log(this.authServ.getConnecte());
    if (this.authServ.getConnecte() !== 'oui') {
    this.router.navigateByUrl('/authentification');
    } else {
    this.router.navigateByUrl('/menu/home');
    }
   }
}
