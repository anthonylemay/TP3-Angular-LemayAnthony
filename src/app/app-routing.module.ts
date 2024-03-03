import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { GestionVideosComponent } from './gestion-videos/gestion-videos.component';
import { FicheVideoComponent } from './fiche-video/fiche-video.component';
import { ListeVideosComponent } from './liste-videos/liste-videos.component';




const routes: Routes = [
  {path: '', component:AccueilComponent},
  {path: 'categories', component:ListeVideosComponent},
  {path: 'a-propos', component: AProposComponent},
  {path: 'gestion-videos', component: GestionVideosComponent},
  {path: ':id', component:FicheVideoComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
