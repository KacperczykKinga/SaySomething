import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatRadioChange } from "@angular/material/radio";
import { FilmGenre, FilmType, Movie, WatchOption } from "../movie";

@Component({
    templateUrl: './movie-template.component.html',
    styleUrls: ['./movie-template.component.css']
})
export class MovieTemplateComponent{
    filmGenres = Object.values(FilmGenre)
    watchOptions = Object.values(WatchOption)
    movie: Movie = {type: FilmType.MOVIE};

    get filmType(): typeof FilmType {
        return FilmType;
    }

    constructor(public dialogRef: MatDialogRef<MovieTemplateComponent>, private httpClient: HttpClient) {}
    
    onCancel(): void {
        this.dialogRef.close();
    }

    onTypeChange(typeEvent: MatRadioChange): void {
        this.movie = {type: typeEvent.value}
    }

    onSave() {
        this.httpClient.post("https://saysomething-a52a6-default-rtdb.firebaseio.com/movies.json", this.movie).subscribe(result => {
            console.log(result)
        })
        this.dialogRef.close();
    }
}