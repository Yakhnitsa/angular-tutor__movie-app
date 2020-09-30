"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TheMovieDatasource = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var TheMovieDatasource = /** @class */ (function () {
    function TheMovieDatasource(http) {
        this.http = http;
        this.apiKey = 'b8ecf22d78b37fb9ee17d60e699a6be5';
        this.movieRequest = 'https://api.themoviedb.org/3/movie/';
        this.posterPath = 'http://image.tmdb.org/t/p/w342';
        this.searchRequest = 'https://api.themoviedb.org/3/search/movie';
    }
    TheMovieDatasource.prototype.getMovieCollection = function (collection) {
        var _this = this;
        var params = new http_1.HttpParams()
            .set('api_key', this.apiKey);
        return this.http.get(this.movieRequest + 'top_rated', { params: params })
            .pipe(operators_1.map(function (response) { return _this.modifyMovieCollection(response); }));
    };
    TheMovieDatasource.prototype.getSingleMovie = function (movieId) {
        var _this = this;
        var params = new http_1.HttpParams()
            .set('api_key', this.apiKey);
        return this.http.get(this.movieRequest + movieId, { params: params })
            .pipe(operators_1.map(function (response) { return _this.modifySingleMovie(response); }));
    };
    TheMovieDatasource.prototype.searchForMovie = function (searchQuery) {
        var _this = this;
        var params = new http_1.HttpParams();
        params = params.set('api_key', this.apiKey);
        params = params.set('query', searchQuery);
        return this.http.get(this.searchRequest, { params: params })
            .pipe(operators_1.map(function (response) { return _this.modifyMovieCollection(response); }));
    };
    TheMovieDatasource.prototype.modifyMovieCollection = function (data) {
        var _this = this;
        var movies = [];
        data.results.forEach(function (item) {
            movies.push({
                id: item.id,
                title: item.title,
                poster: _this.posterPath + item.poster_path,
                rated: item.vote_average,
                released: item.release_date
            });
        });
        return movies;
    };
    TheMovieDatasource.prototype.modifySingleMovie = function (response) {
        return {
            id: response.id,
            title: response.title,
            poster: this.posterPath + response.poster_path,
            rated: response.vote_average,
            released: response.release_date,
            tagline: response.tagline,
            overview: response.overview,
            runtime: response.runtime,
            genre: response.genres,
            director: '',
            writer: '',
            actors: '',
            plot: '',
            language: response.original_language,
            country: '',
            awards: ''
        };
    };
    TheMovieDatasource = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TheMovieDatasource);
    return TheMovieDatasource;
}());
exports.TheMovieDatasource = TheMovieDatasource;
