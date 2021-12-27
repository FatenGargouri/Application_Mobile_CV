import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor(private router: Router , private authServ: AuthentificationService , private toastController: ToastController) { }
  async onLogin(value: any) {
    if (this.authServ.connecter(value.id, value.pass)) {
    this.router.navigateByUrl('/menu/home');
    }
    else {
      const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Vérifier votre id et mot de passe'
      });
      await toast.present();
      }
   }

   private id = '';
   ngOnInit() {
    this.id = this.authServ.getIdFromLocalStorage();
   }

  onGoSignUp() {
    this.router.navigateByUrl('/inscription');
   }

  }
