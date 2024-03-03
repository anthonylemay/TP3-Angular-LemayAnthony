import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { GestionVideosComponent } from './gestion-videos/gestion-videos.component';
import { FicheVideoComponent } from './fiche-video/fiche-video.component';

const routes: Routes = [
  {path: '', component:AccueilComponent},
  {path: ':id', component:FicheVideoComponent},
  {path: 'a-propos', component: AProposComponent},
  {path: 'gestion-videos', component: GestionVideosComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
