import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
const routes: Routes = [
 {
 path: '',
 component: MenuPage,
 children: [
 {
 path: 'home',
 loadChildren: () => import('../../home/home.module').then( m =>
m.HomePageModule)
 },
 {
 path: 'profil',
 loadChildren: () => import('../profil/profil.module').then( m =>
m.ProfilPageModule)
 },
 {
 path: 'formation',
 loadChildren: () => import('../formation/formation.module').then( m =>
m.FormationPageModule)
 },
 {
 path: 'competances',
 loadChildren: () => import('../competances/competances.module').then( m =>
m.CompetancesPageModule)
 },
 {
 path: 'stages',
 loadChildren: () => import('../stages/stages.module').then( m =>
m.StagesPageModule)
 },
 {
 path: 'divers',
 loadChildren: () => import('../divers/divers.module').then( m =>
m.DiversPageModule)
 },
 ]
 }
];
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})
export class MenuPageRoutingModule {}
