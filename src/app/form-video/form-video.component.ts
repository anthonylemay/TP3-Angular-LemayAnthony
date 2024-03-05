import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoService } from '../video.service';
import { Video } from '../video';
import { NgForm } from '@angular/forms';
import { Categorie } from '../video';
import { Auteur } from '../video';
import { VideoSubmission } from '../video-submission';

@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrls: ['./form-video.component.scss']
})
export class FormVideoComponent implements OnInit {
  video!: Video;
  categories: Categorie[] = [];
  auteurs: Auteur[] = [];


  constructor(
    private videoService: VideoService,
    public dialogRef: MatDialogRef<FormVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partial<Video> | null ) {}
    @Output() formSubmit: EventEmitter<Video | string> = new EventEmitter();

  ngOnInit(): void {
    this.video = { ...this.getDefaultVideo(), ...(this.data || {}) };
    this.fetchCategories();
    this.fetchAuteurs();
  }


  isValidCategory: boolean = true;
  isValidAuthor: boolean = true;

  isCategoryAndAuthorSelected(): boolean {
    this.isValidCategory = this.video.categorie.id !== -1;
    this.isValidAuthor = this.video.auteur.id !== -1;
    return this.isValidCategory && this.isValidAuthor;
  }

  getDefaultVideo(): Video {
    return {
      id: 0,
      url_img: 'https://picsum.photos/id/579/200/300',
      nom: 'Default Name',
      description: 'Default Description',
      code: '',
      categorie: { id: -1, nom: 'Sélectionner' },
      auteur: {
        id: -1,
        nom: 'Sélectionner',
        pseudo: 'DefaultPseudo',
        verifie: false,
        description: 'Default Description',
        url_pic: 'defaultAvatarURL',
        coordonnees: {
          id: 0,
          courriel: '',
          facebook: '',
          instagram: '',
          twitch: '',
          site_web: '',
        }
      },
      date: new Date(),
      duree: 0,
      vues: 0,
      score: 0,
      closedcaption: false,
      subtitle: false,
      avis: [{
        auteur: {
          id: 0,
          nom: 'Anonymous',
          pseudo: 'Anonymous',
          verifie: false,
          description: 'Default Description',
          url_pic: 'defaultAvatarURL',
          coordonnees: {
            id: 0,
            courriel: '',
            facebook: '',
            instagram: '',
            twitch: '',
            site_web: '',
          }
        },
        note: 0,
        commentaires: 'No Comment',
        reaction: null,
        date: new Date()
      }]
    };
  }


  fetchCategories(): void {
    this.videoService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  fetchAuteurs(): void {
    this.videoService.getAuteurs().subscribe(auteurs => {
      this.auteurs = auteurs;
    });
  }

  prepareVideoForSubmission(video: Video): VideoSubmission {
    return {
      id: video.id,
      url_img: video.url_img,
      nom: video.nom,
      description: video.description,
      code: video.code,
      categorie_id: video.categorie.id,
      auteur_id: video.auteur.id,
      date: video.date instanceof Date ? video.date.toISOString().split('T')[0] : video.date, // format de date YYYY-MM-DD
      duree: video.duree,
      vues: video.vues,
      score: video.score,
      closedcaption: video.closedcaption,
      subtitle: video.subtitle,
    };
  }
  

  addVideo(formVideoAjout: NgForm) {
    if (!this.isCategoryAndAuthorSelected()) {
      alert("Veuillez avoir choisi un auteur et une catégorie valide."); 
      return;
    }
    if (formVideoAjout.valid) {
      const videoForSubmission = this.prepareVideoForSubmission(this.video);
      this.videoService.addVideo(videoForSubmission).subscribe({
        next: (response) => {
          console.log(response);
          this.formSubmit.emit("Vidéo ajoutée avec succès!");
          this.dialogRef.close();
        },
        error: (err) => {
          console.error(err);
          this.formSubmit.emit("Erreur lors de l'ajout de la vidéo");
        }
      });
    }
  }
  
  updateVideo(formVideoAjout: NgForm) {
    if (!this.isCategoryAndAuthorSelected()) {
      alert("Veuillez avoir choisi un auteur et une catégorie valide."); 
      return;
    }
    if (formVideoAjout.valid) {
      const videoForSubmission = this.prepareVideoForSubmission(this.video);
      if (typeof videoForSubmission.id === 'number') { // S'assurer que le id est défini et est un nombre.
        this.videoService.updateVideo(videoForSubmission.id, videoForSubmission).subscribe({
          next: (response) => {
            console.log(response);
            this.formSubmit.emit("Vidéo modifiée avec succès!");
            this.dialogRef.close();
          },
          error: (err) => {
            console.error(err);
            this.formSubmit.emit("Erreur lors de la modification de la vidéo");
          }
        });
      } else {
        console.error("Video ID is undefined or not a number.");
      }
    }
  }
  
  annuler() {
    this.dialogRef.close("Requête annulée");
  }

  clearUrlImg() {
    this.video.url_img = '';
  }

  clearNom() {
    this.video.nom = '';
  }

  clearDescription() {
    this.video.description = '';
  }

  clearCode() {
    this.video.code = '';
  }

  clearDuree() {
    this.video.duree = 0; 
  }

  clearVues() {
    this.video.vues = 0; 
  }

  clearScore() {
    this.video.score = 0; 
  }


}