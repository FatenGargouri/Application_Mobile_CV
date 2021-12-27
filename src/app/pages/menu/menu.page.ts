import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router, private autServ: AuthentificationService) { }

  ngOnInit() {
  }
  public pages = [
    {titre: 'Accueil', chemin: '/menu/home'},
    {titre: 'Profil', chemin: '/menu/profil'},
    {titre: 'Formation', chemin: '/menu/formation'},
    {titre: 'Competances', chemin: '/menu/competances'},
    {titre: 'Stages', chemin: '/menu/stages'},
    {titre: 'Divers', chemin: '/menu/divers'},
    {titre: 'Déconnexion', chemin: 'deconnexion'}
   ];

   onMenuItem(p) {
    if (p.chemin === 'deconnexion') {
    this.autServ.deconnecter();
    this.router.navigateByUrl('/authentification');
    } else {
    this.router.navigateByUrl(p.chemin);
    }
   }
   

}
