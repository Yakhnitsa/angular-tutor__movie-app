export interface Movie {
  id: string;
  imdb_id?: string;
  title: string;
  poster: string;
  rated: number;
  released: string;
}

export interface MovieFull extends Movie{
  tagline: string;
  overview: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
}
