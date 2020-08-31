export interface Movie {
  title: string;
  poster: string;
  year: string;
  rated: string;
  released: string;
}

export interface MovieFull extends Movie{
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
}
