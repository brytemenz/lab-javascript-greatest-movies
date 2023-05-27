// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = [];

  for (let i = 0; i < moviesArray.length; i++) {
    const movie = moviesArray[i];
    const director = movie.director;

    if (!directors.includes(director)) {
      directors.push(director);
    }
  }

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const spielbergDramas = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return spielbergDramas.length;
}

const SpielbergMoviesCount = howManyMovies(movies);
console.log(SpielbergMoviesCount);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const scoredMovies = moviesArray.filter(
    (movie) => typeof movie.score === "number"
  );

  const totalScores = scoredMovies.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );

  const averageScore = totalScores / moviesArray.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  const totalScore = dramaMovies.reduce((accumulator, movie) => {
    return accumulator + (movie.score || 0);
  }, 0);

  const averageScore =
    dramaMovies.length > 0 ? totalScore / dramaMovies.length : 0;
  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedMovies = [...moviesArray];

  orderedMovies.sort((movieA, movieB) => {
    if (movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title);
    } else {
      return movieA.year - movieB.year;
    }
  });

  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray].sort((movieA, movieB) => {
    const titleA = movieA.title.toLowerCase();
    const titleB = movieB.title.toLowerCase();
    return titleA.localeCompare(titleB);
  });

  const alphabeticalTitles = sortedMovies.map((movie) => movie.title);

  return alphabeticalTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const duration = movie.duration;
    const durationArr = duration.split(" ");

    let minutes = 0;

    for (let i = 0; i < durationArr.length; i++) {
      const value = parseInt(durationArr[i]);

      if (durationArr[i].includes("h")) {
        minutes += value * 60;
      } else if (durationArr[i].includes("min")) {
        minutes += value;
      }
    }

    return { ...movie, duration: minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
}
