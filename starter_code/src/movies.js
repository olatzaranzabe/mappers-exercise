const orderByYear = movies => {
    return movies.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title - b.title > 0) return 1;
            if (a.title - b.title < 0) return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
    });
};

console.log(orderByYear(movies));

let howManyMovies = movies.filter(movie => {
    return movie.director === "Steven Spielberg";
});

console.log(howManyMovies);

const orderAlphabetically = movies => {
    return movies.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });
};

console.log(orderAlphabetically(movies));
