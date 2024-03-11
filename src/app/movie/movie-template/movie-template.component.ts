import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatRadioChange } from "@angular/material/radio";
import { FilmGenre, FilmType, Movie, WatchOption } from "../movie";

@Component({
    templateUrl: './movie-template.component.html',
    styleUrls: ['./movie-template.component.css']
})
export class MovieTemplateComponent implements OnInit {
    filmGenres = Object.values(FilmGenre)
    watchOptions = Object.values(WatchOption)
    movie: Movie = {type: FilmType.MOVIE};
    editMode = false;

    get filmType(): typeof FilmType {
        return FilmType;
    }

    constructor(public dialogRef: MatDialogRef<MovieTemplateComponent>, private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: Movie) {}
    
    ngOnInit(): void {
        if(this.data) {
            this.movie = this.data;
            this.editMode = true;
        }
    }

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