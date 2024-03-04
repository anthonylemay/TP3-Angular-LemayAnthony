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


  convertBooleansToNumbers(video: Video): any {
    const convertedVideo = {
      ...video,
      closedcaption: video.closedcaption ? 1 : 0,
      subtitle: video.subtitle ? 1 : 0,
    };
    console.log('Video before conversion:', video);
    console.log('Video after conversion to numbers:', convertedVideo);
    return convertedVideo;
  }

  addVideo(formVideoAjout: NgForm) {
    const videoToSend = this.convertBooleansToNumbers(this.video);
    console.log('Sending video to API:', videoToSend);
    this.videoService.addVideo(videoToSend).subscribe(_ => {
      console.log('Video added successfully');
      formVideoAjout.resetForm();
      this.dialogRef.close("Vidéo ajoutée!");
    }, error => {
      console.error('Error adding video:', error);
    });
  }
  
  
  updateVideo(formVideoAjout: NgForm) {
    const videoToUpdate = this.convertBooleansToNumbers(this.video);
    console.log('Updating video with data:', videoToUpdate);
    this.videoService.updateVideo(videoToUpdate).subscribe(_ => {
      console.log('Video updated successfully');
      formVideoAjout.resetForm();
      this.dialogRef.close("Vidéo modifiée!");
    }, error => {
      console.error('Error updating video:', error);
    });
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
