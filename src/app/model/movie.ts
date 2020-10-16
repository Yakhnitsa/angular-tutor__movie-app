export interface Movie {
  id: string;
  imdb_id?: string;
  title: string;
  poster: string;
  rated: number;
  released: string;
  overview?: string;
}

export interface MovieFull extends Movie{
  tagline: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  countries: string[];
  awards: string;
  homepage: string;
}

export interface SearchResult{
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  totalResults: number;
}
