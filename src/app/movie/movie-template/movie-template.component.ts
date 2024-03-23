import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatRadioChange } from "@angular/material/radio";
import { FilmGenre, FilmType, Movie, MovieForm, WatchOption } from "../movie";

@Component({
    templateUrl: './movie-template.component.html',
    styleUrls: ['./movie-template.component.css']
})
export class MovieTemplateComponent implements OnInit {
    movieForm: FormGroup<MovieForm>;
    filmGenres = Object.values(FilmGenre)
    watchOptions = Object.values(WatchOption)
    editMode = false;

    get filmType(): typeof FilmType {
        return FilmType;
    }

    constructor(public dialogRef: MatDialogRef<MovieTemplateComponent>, private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: Movie, private formBuilder: FormBuilder) {}
    
    ngOnInit(): void {
        this.setForm(this.data)
        this.addControlOnTheBaseOfType()
        if(this.data) {
            this.editMode = true;
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onTypeChange(typeEvent: MatRadioChange): void {
        this.movieForm.reset()
        this.movieForm.setControl('type', new FormControl(typeEvent.value, Validators.required))
        this.addControlOnTheBaseOfType()
    }

    onSave(): void {
        const movie = this.movieForm.getRawValue();
        if(this.editMode) {
            this.httpClient.put("https://saysomething-a52a6-default-rtdb.firebaseio.com/movies/" + this.data.id + '.json', {...movie, id: undefined}).subscribe(result => {
                console.log(result)
            })
        } else {
            this.httpClient.post("https://saysomething-a52a6-default-rtdb.firebaseio.com/movies.json", movie).subscribe(result => {
                console.log(result)
            })
        }
        this.dialogRef.close();
    }

    private setForm(movie: Movie | undefined) {
        this.movieForm = new FormGroup({
            type: new FormControl(movie?.type ?? FilmType.MOVIE, Validators.required),
            title: new FormControl(movie?.title, Validators.required),
            genre: new FormControl(movie?.genre, Validators.required),
            watchedOn: new FormControl(movie?.watchedOn, Validators.required),
            rate: new FormControl(movie?.rate, Validators.required),
            review: new FormControl(movie?.review, Validators.required),
        })
    }

    private addControlOnTheBaseOfType(): void {
        if(this.movieForm.getRawValue().type === FilmType.MOVIE) {
            this.movieForm.removeControl('seasonsNumber')
            this.movieForm.addControl('duration', new FormControl(this.data?.duration, Validators.required) )
        } else {
            this.movieForm.removeControl('duration')
            this.movieForm.addControl('seasonsNumber', new FormControl(this.data?.seasonsNumber, Validators.required) )
        }
    }
}