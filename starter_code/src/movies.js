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

console.log(howManyMovies.length);

const orderAlphabetically = movies => {
    const sortMovies = movies.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });
    return sortMovies.slice(0, 20);
};

console.log(orderAlphabetically(movies));

// const twentyMovies = orderAlphabetically(movies).slice(0, 20);

// console.log("20", twentyMovies);

let rates = movies.map(({ rate }) => rate);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log((rates.reduce(reducer) / rates.length).toFixed(2));
