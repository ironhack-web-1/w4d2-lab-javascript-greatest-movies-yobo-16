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
// Let's imagine we want to turn "2h" to minutes
function convertHours(hourString) {
    // ["2", ""]
    let calculateHour = hourString.split('h');
    return calculateHour[0] * 60;
    // "2" * 60
    // 120
  }
  
  // "33min"
  function convertMinutes(minuteString) {
    // ["33", ""]
    let calculateMinutes = minuteString.split('min');
    return Number(calculateMinutes[0]);
    // return +(calculateMinutes[0]); // this is alternative fancier way
    // 33
  }
  
  function convertDuration(duration) {
    let timePieces = duration.split(' ');
    // ["2h", "33min"]
    // ["2h"]
    // ["33min"]
  
    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes('h')) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);
  
    return minutes;
  }
  
  function turnHoursToMinutes(movies) {
    let newCentArray = movies.map((movie) => {
      let newMovie = {};
      newMovie.title = movie.title;
      newMovie.year = movie.year;
      newMovie.director = movie.director;
      newMovie.duration = convertDuration(movie.duration);
      newMovie.genre = movie.genre;
      newMovie.score = movie.score;
  
      return newMovie;
    });
  
    return newCentArray;
  }
  /* console.log(turnHoursToMinutes(movies))  */
  
  /////USING A COPY FROM THE ARRAY and MAP////
  /* function turnHoursToMinutes(movies) {
    let newCentArray = [...movies];
     newCentArray.map((movie) => {
      movie.duration = convertDuration(movie.duration);
  
    });
    return newCentArray;
  }
  console.log(turnHoursToMinutes(movies)); */
  
  
  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg(movies) {
    if (!movies.length) return null;
  
    let masterObject = {};
  
    movies.forEach((movie) => {
      if (!masterObject[movie.year]) {
        masterObject[movie.year] = [movie];
      } else {
        masterObject[movie.year].push(movie);
      }
    });
  
    let highest = 0;
    let theActualYear;
    for (let theYear in masterObject) {
      if (scoresAverage(masterObject[theYear]) > highest) {
        highest = scoresAverage(masterObject[theYear]);
        theActualYear = theYear;
      }
    }
    return `The best year was ${theActualYear} with an average score of ${highest}`;
  }