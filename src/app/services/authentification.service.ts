import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  constructor() { }
  private id = 'id';
  private connecte = 'non';
private password = 'password';

public creerNouvelUtilisateur(id: string, password: string) {
 if (id !== '' && password !== '') {
 localStorage.setItem(this.id, id);
 localStorage.setItem(this.password, password);
 localStorage.setItem(this.connecte, 'oui');
 return true;
 } else {
 return false;
 }
}
public getIdFromLocalStorage() {
  const s = localStorage.getItem(this.id);
  if (s !== null) {
  return s;
  }
  return '';
 }

public connecter(id: string, password: string) {
  const id2 = localStorage.getItem(this.id);
  const password2 = localStorage.getItem(this.password);
  if (id === id2 && password === password2) {
    localStorage.setItem(this.connecte, 'oui');
  return true;
  } else {
  return false;
  }
 }

 public getConnecte(){
  return localStorage.getItem(this.connecte);
 }


 



 public deconnecter() {
  return localStorage.setItem(this.connecte, 'non');
 }

 
}

