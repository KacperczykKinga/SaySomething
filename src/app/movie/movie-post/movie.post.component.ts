import { Component, Input } from "@angular/core";
import { FilmType, Movie } from "../movie";

@Component({
    selector: 'movie-post',
    templateUrl: './movie-post.component.html',
    styleUrls: ['./movie-post.component.css']
})
export class MoviePostComponent {
    @Input() movie: Movie;

    get filmType(): typeof FilmType {
        return FilmType;
    }
}