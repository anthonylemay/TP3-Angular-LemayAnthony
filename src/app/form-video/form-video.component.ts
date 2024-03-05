import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoService } from '../video.service';
import { Video } from '../video';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrls: ['./form-video.component.scss']
})
export class FormVideoComponent implements OnInit {
  video!: Video;

  constructor(
    private videoService: VideoService,
    public dialogRef: MatDialogRef<FormVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partial<Video> | null ) {}

  ngOnInit(): void {
    this.video = { ...this.getDefaultVideo(), ...(this.data || {}) };
  }

  getDefaultVideo(): Video {
    return {
      id: 0,
      url_img: 'defaultImageURL',
      nom: 'Default Name',
      description: 'Default Description',
      code: 'N/A',
      categorie: { id: 0, nom: 'Default Category' },
      auteur: {
        id: 0,
        nom: 'Default Author',
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





  addVideo(formVideoAjout: NgForm) {
    if (formVideoAjout.valid) {
      this.videoService.addVideo(this.video).subscribe(
        _ => {
          console.log(this.video);
          formVideoAjout.resetForm();
          this.dialogRef.close("vidéo ajouté!");
        }
      );
    }
  }

  updateVideo(formVideoAjout: NgForm) {
    if (formVideoAjout.valid) {
      this.videoService.updateVideo(this.video).subscribe(
        _ => {
          formVideoAjout.resetForm();
          this.dialogRef.close("Vidéo modifié!");
        }
      );
      }
    }
  
  annuler() {
    this.dialogRef.close("Requête annulée");
  }

}
