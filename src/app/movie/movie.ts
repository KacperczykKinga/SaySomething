export interface Movie {
    type?: FilmType,
    title?: string,
    genre?: FilmGenre,
    duration?: number,
    seasonsNumber?: number,
    watchedOn?: WatchOption,
    rate?: number,
    review?: string,
}

export enum FilmType {
    MOVIE = "Movie",
    TV_SERIES ="TV Series"
}

export enum FilmGenre {
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

export enum WatchOption {
    TELEVISION = "Television",
    CINEMA = "Cinema",
    NETFLIX = "Netflix",
    DISNEY = "Disney+",
    AMAZON = "Amazon Prime",
    HBO = "HBO Max"
}