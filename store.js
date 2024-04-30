const movieAPI = require("./movie.js");

const api = movieAPI;

const product = [
	{
		id: 1,
		name: "avengers",
		quantity: 3
	},
	{
		id: 2,
		name: "glover",
		quantity: 3
	},
	{
		id: 3,
		name: "grey's anatomy",
		quantity: 3
	},
	{
		id: 4,
		name: "get out",
		quantity: 5

	}
];

api.loadMoviesInshelf(product);
const viewOne = api.viewSingleMovie(1);
api.updateAMovie(3, { name: "lift", quantity: 1 });

const viewallMovies = api.viewallMovies();

console.table({ viewallMovies });
console.log("////////////////////////////////////");
console.log({ viewOne });
console.log("////////////////////////////////////");
api.deleteAmovie(2);
console.log({ viewallMovies });
console.log("////////////////////////////////////");
if (!api.viewSingleMovie(3)) {
	api.addOneMovie({
		id: 3,
		name: "grey's anatomy",
		quantity: 3
	});
}
console.log("////////////////////////////////////");
console.log({ viewallMoviesAfterAddition: viewallMovies });

