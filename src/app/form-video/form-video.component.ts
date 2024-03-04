import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoService } from '../video.service';
import { Video } from '../video';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrls: ['./form-video.component.scss']
})
export class FormVideoComponent implements OnInit {
  categories: Categorie[] = [];

  constructor(
    private videoService: VideoService,
    public dialogRef: MatDialogRef<FormVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video) {
      if (data) {
        this.video = data;
      }
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.videoService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }


  /*convertBooleansToNumbers(video: Video): any {
    const convertedVideo = {
      ...video,
      closedcaption: video.closedcaption ? 1 : 0,
      subtitle: video.subtitle ? 1 : 0,
    };
    console.log('Video avant conversion:', video);
    console.log('Video après conversion à nombres', convertedVideo);
    return convertedVideo;
  } */

  /* addVideo(formVideoAjout: NgForm) {
    const videoToSend = this.convertBooleansToNumbers(this.video);
    console.log('Sending video to API:', videoToSend);
    this.videoService.addVideo(videoToSend).subscribe(_ => {
      console.log('Video added successfully');
      formVideoAjout.resetForm();
      this.dialogRef.close("Vidéo ajoutée!");
    }, error => {
      console.error('Error adding video:', error);
    });
  } */
  
  
  /* updateVideo(formVideoAjout: NgForm) {
    const videoToUpdate = this.convertBooleansToNumbers(this.video);
    console.log('mise à jour du contenu à venir:', videoToUpdate);
    this.videoService.updateVideo(videoToUpdate).subscribe(
      _ => {
      console.log('Video mise à jour avec succès');
      formVideoAjout.resetForm();
      this.dialogRef.close("Vidéo modifiée!");
    }, error => {
      console.error('Erreur de modification:', error);
    });
  } */


  addVideo(formVideoAjout: NgForm) {
    //if (formVideoAjout.valid) {
      this.videoService.addVideo(this.video).subscribe(
        _ => {
          console.log(this.video);
          formVideoAjout.resetForm();
          this.dialogRef.close("vidéo ajouté!");
        }
      );
    //}
  }

  updateVideo(formVideoAjout: NgForm) {
// ajouter la validation
      this.videoService.updateVideo(this.video).subscribe(
        _ => {
          formVideoAjout.resetForm();
          this.dialogRef.close("Vidéo modifié!");
        }
      );
    }
  
  onSubmit(form: NgForm) {
    if (this.video.id) {
      this.updateVideo(form);
    } else {
      this.addVideo(form);
    }
  }

  annuler() {
    this.dialogRef.close("Requête annulée");
  }

  video: Video = {
    url_img: "",
    nom: "Aucun Nom",
    description: "Aucune Description",
    code: "N/A",
    categorie: {
      id:1,
      nom: "",
    },
    auteur: {
      nom: "",
      pseudo: "",
      verifie: false,
      description:"",
      url_pic:"",
      coordonnees:{
        site_web:"",
        facebook:"",
        instagram:"",
        courriel: "",
        twitch: ""
      }



    },
    date: new Date(),
    duree: 0,
    closedcaption: false,
    subtitle: false,
    score: 0,
    vues: 0,

  };
}
