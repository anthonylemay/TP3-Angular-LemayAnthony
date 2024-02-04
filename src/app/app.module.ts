import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVideosComponent } from './liste-videos/liste-videos.component';
import { VNomComponent } from './v-nom/v-nom.component';
import { VDescComponent } from './v-desc/v-desc.component';
import { VCodeComponent } from './v-code/v-code.component';
import { VCategorieComponent } from './v-categorie/v-categorie.component';
import { VAuteurComponent } from './v-auteur/v-auteur.component';
import { VDateComponent } from './v-date/v-date.component';
import { VDureeComponent } from './v-duree/v-duree.component';
import { VVuesComponent } from './v-vues/v-vues.component';
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
import { VideoXlComponent } from './video-xl/video-xl.component';
import { VImgXlComponent } from './v-img-xl/v-img-xl.component';
import { AccountComponent } from './account/account.component';
import { AjoutAvisComponent } from './ajout-avis/ajout-avis.component';
import { FormVideoComponent } from './form-video/form-video.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeVideosComponent,
    VNomComponent,
    VDescComponent,
    VCodeComponent,
    VCategorieComponent,
    VAuteurComponent,
    VDateComponent,
    VDureeComponent,
    VVuesComponent,
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
    VImgComponent,
    VideoXlComponent,
    VImgXlComponent,
    AccountComponent,
    AjoutAvisComponent,
    FormVideoComponent
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
