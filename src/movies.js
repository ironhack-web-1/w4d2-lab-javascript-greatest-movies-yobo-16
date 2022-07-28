// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(item => item.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(item => item.director === "Steven Spielberg").filter(item => item.genre.includes("Drama")).length
    // return moviesOfSP.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

   return !moviesArray.length
     ? 0
     : parseFloat(
         (
           moviesArray.reduce(
             (valorPrevio, valorActual) => (valorActual.score || 0) + valorPrevio,0) / moviesArray.length
         ).toFixed(2)
       ); 

    // let sum = (moviesArray.map((item) => item.score ? item.score: 0).reduce((valorPrevio, valorActual)=> valorPrevio + valorActual,0)) / moviesArray.length
     
  

    // return 

    //return !moviesArray.length ? 0 : parseFloat(sum.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovie = moviesArray.filter(item => item.genre.includes("Drama"))
    return scoresAverage(dramaMovie)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedArray = [...moviesArray].sort((a,b) => {
        return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
    }) //SPread crea un nuevo array

    return orderedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedArray = [...moviesArray].sort((a,b) => a.title.localeCompare(b.title))
    .map(item => item.title) //SPread crea un nuevo array

    //let onlyTitles =  orderedArray.map(item => item.title)


    return orderedArray.length > 20 ? orderedArray.slice(0,20) : orderedArray

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
