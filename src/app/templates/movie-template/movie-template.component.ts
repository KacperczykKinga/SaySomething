import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

enum FilmType {
    MOVIE = "Movie",
    TV_SERIES ="TV Series"
}

enum FilmGenre {
    ROMANCE = "Romance",
    ROMANCE_COMEDY = "Romance comedy",
    SCIENCE_FICTION = "Science fiction",
    FANTASY = "Fantasy",
    HORROR = "Horror",
    THRILLER = "Thriller",
    ACTION = "Action",
    DOCUMENATARY = "Documentary",
    ANIMATION = "Animation",
    DRAMA = "Drama",
    ADVENTURE = "Adventure",
    COMEDY = "Comedy"
}

enum WatchOption {
    TELEVISION = "Television",
    CINEMA = "Cinema",
    NETFLIX = "Netflix",
    DISNEY = "Disney+",
    AMAZON = "Amazon Prime",
    HBO = "HBO Max"
}

@Component({
    templateUrl: './movie-template.component.html',
    styleUrls: ['./movie-template.component.css']
})
export class MovieTemplateComponent{
    type = FilmType.MOVIE
    filmGenres = Object.values(FilmGenre)
    watchOptions = Object.values(WatchOption)

    get filmType(): typeof FilmType {
        return FilmType;
    }

    constructor(public dialogRef: MatDialogRef<MovieTemplateComponent>) {}
    
    onCancel(): void {
        this.dialogRef.close();
    }
}