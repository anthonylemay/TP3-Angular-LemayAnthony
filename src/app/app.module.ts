import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';

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
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategorieChipsComponent } from './categorie-chips/categorie-chips.component';
import { SmVideoComponent } from './sm-video/sm-video.component';
import { VScoreComponent } from './v-score/v-score.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { ClosedcaptionComponent } from './closedcaption/closedcaption.component';
import { VImgComponent } from './v-img/v-img.component';


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
    VAvisCommentaireComponent,
    AccueilComponent,
    HeaderComponent,
    SidebarComponent,
    CategorieChipsComponent,
    SmVideoComponent,
    VScoreComponent,
    SubtitleComponent,
    ClosedcaptionComponent,
    VImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
