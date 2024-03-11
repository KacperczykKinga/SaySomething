import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FilmType, Movie } from "../movie";
import { MovieTemplateComponent } from "../movie-template/movie-template.component";

@Component({
    selector: 'movie-post',
    templateUrl: './movie-post.component.html',
    styleUrls: ['./movie-post.component.css']
})
export class MoviePostComponent {
    @Input() movie: Movie;

    constructor(public dialog: MatDialog) {}
    
    get filmType(): typeof FilmType {
        return FilmType;
    }

    onEditPost() {
        const dialogRef = this.dialog.open(MovieTemplateComponent, {
            width:'550px',
            disableClose: true,
            data: this.movie
        });
      
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}