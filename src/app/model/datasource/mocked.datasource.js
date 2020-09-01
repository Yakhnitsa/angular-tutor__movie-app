"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MockedDatasource = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var MockedDatasource = /** @class */ (function () {
    function MockedDatasource() {
        this.movieCollection = [
            {
                id: '605116',
                title: '"Project Power',
                poster: 'http://image.tmdb.org/t/p/w342/TnOeov4w0sTtV2gqICqIxVi74V.jpg',
                rated: 6,
                released: '2020-08-14'
            },
            {
                id: '718444',
                title: 'Rogue',
                poster: 'http://image.tmdb.org/t/p/w342/uOw5JD8IlD546feZ6oxbIjvN66P.jpg',
                rated: 6.7,
                released: '2020-08-20'
            },
            {
                id: '539885',
                title: 'Ava',
                poster: 'http://image.tmdb.org/t/p/w342/uGhQ2ZGBpzCj6wC5jUrybsZuPTI.jpg',
                rated: 6.7,
                released: '2020-08-06'
            },
            {
                id: '618354',
                title: 'Superman: Man of Tomorrow',
                poster: 'http://image.tmdb.org/t/p/w342/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg',
                rated: 7.5,
                released: '2020-08-14'
            },
            {
                id: '721452',
                title: 'One Night in Bangkok',
                poster: 'http://image.tmdb.org/t/p/w342/i4kPwXPlM1iy8Jf3S1uuLuwqQAV.jpg',
                rated: 7.1,
                released: '2020-08-25'
            },
            {
                id: '577922',
                title: 'Tenet',
                poster: 'http://image.tmdb.org/t/p/w342/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
                rated: 7.6,
                released: '2020-08-22'
            },
        ];
        this.singleMovie = {
            id: '550',
            title: 'Fight Club',
            poster: 'http://image.tmdb.org/t/p/w342/k1lICEYRpJeFRIRfjxYwmpO9LTu.jpg',
            rated: 8.4,
            released: '1999-10-15',
            tagline: 'Mischief. Mayhem. Soap',
            overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \\"fight clubs\\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
            runtime: '139',
            genre: 'Drama',
            director: '',
            writer: '',
            actors: '',
            plot: '',
            language: 'English',
            country: 'Germany, United States of America',
            awards: ''
        };
    }
    MockedDatasource.prototype.getMovieCollection = function (collection) {
        return rxjs_1.of(this.movieCollection);
    };
    MockedDatasource.prototype.getSingleMovie = function (movieId) {
        return rxjs_1.of(this.singleMovie);
    };
    MockedDatasource = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MockedDatasource);
    return MockedDatasource;
}());
exports.MockedDatasource = MockedDatasource;
