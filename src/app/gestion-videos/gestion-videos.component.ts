import { Component, OnInit, ViewChild } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormVideoComponent } from '../form-video/form-video.component';


@Component({
  selector: 'app-gestion-videos',
  templateUrl: './gestion-videos.component.html',
  styleUrls: ['./gestion-videos.component.scss']
})
export class GestionVideosComponent implements OnInit  {

  dataSourceVideos: MatTableDataSource<Video> = new MatTableDataSource();
  columnsToDisplay = ['nom', 'code', 'date', 'duree', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableVideos!: MatTable<Video>;

  constructor(private videoService: VideoService, private _snackBar: MatSnackBar, public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() { 
    this.videoService.getVideos().subscribe(
      resultat => {
        console.log(resultat);
        this.dataSourceVideos = new MatTableDataSource(resultat);
        this.dataSourceVideos.paginator = this.paginator;
        this.dataSourceVideos.sort = this.sort;
        this.tableVideos.renderRows();
      }
    );
  }

  openDialog(video?: Video) { 
    console.log(video);
    const dialogRef = this.dialog.open(FormVideoComponent, {
        data: video
      });
  
    const instance = dialogRef.componentInstance;
    instance.formSubmit.subscribe((result) => {
      console.log(result); 
      this.getVideos(); 
      this._snackBar.open(result.toString(), undefined, {
        duration: 2000
      });
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialog du formulaire de vidéo a été fermé');
      this._snackBar.open(result, undefined, {
        duration: 2000
      });
      this.getVideos();
    });
  }

  deleteVideo(id: string) { 
    this.videoService.deleteVideo(id).subscribe(
      _ => {
        this.getVideos();
        this._snackBar.open("Vidéo supprimée avec succès", undefined, {
          duration: 2000
        });
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVideos.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceVideos.paginator) {
      this.dataSourceVideos.paginator.firstPage();
    }
  }


}
