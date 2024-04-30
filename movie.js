class MovieStore {
	constructor() {
		this.shelf = [];
	}

	loadMoviesInshelf(products) {
		for (let product of products) {
			this.shelf.push(product);
		}
	}

	viewSingleMovie(id) {
		const movie = this.shelf.find((movie) => movie.id === id);

		if (!movie) return false;

		return movie;
	}

	viewallMovies() {
		return this.shelf;
	}

	updateAMovie(id, body) {
		const movieIndex = this.shelf.findIndex((item) => item.id === id);
		if (movieIndex === -1) return false;

		const updates = Object.keys(body);

		updates.forEach(
			(update) => (this.shelf[movieIndex][update] = body[update])
		);
	}

	addOneMovie(product) {
		this.shelf.push(product);
	}

	deleteAmovie(id) {
		const movieIndex = this.shelf.findIndex((item) => item.id === id);
		if (movieIndex === -1) return false;

		this.shelf.splice(movieIndex, 1);

		// return (this.shelf = this.shelf.filter((item) => item.id !== id));
	}
}

module.exports = new MovieStore;



