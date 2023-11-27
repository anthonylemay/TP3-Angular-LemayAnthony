import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { ListeVideosComponent } from './liste-videos/liste-videos.component';
import { VideoComponent } from './video/video.component';
import { VNomComponent } from './v-nom/v-nom.component';
import { VDescComponent } from './v-desc/v-desc.component';
import { VCodeComponent } from './v-code/v-code.component';
import { VCategorieComponent } from './v-categorie/v-categorie.component';
import { VAuteurComponent } from './v-auteur/v-auteur.component';
import { VDateComponent } from './v-date/v-date.component';
import { VDureeComponent } from './v-duree/v-duree.component';
import { VVuesComponent } from './v-vues/v-vues.component';
import { VAvisComponent } from './v-avis/v-avis.component';
import { VAvisNoteComponent } from './v-avis-note/v-avis-note.component';
import { VAvisCommentaireComponent } from './v-avis-commentaire/v-avis-commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    ListeVideosComponent,
    VideoComponent,
    VNomComponent,
    VDescComponent,
    VCodeComponent,
    VCategorieComponent,
    VAuteurComponent,
    VDateComponent,
    VDureeComponent,
    VVuesComponent,
    VAvisComponent,
    VAvisNoteComponent,
    VAvisCommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
