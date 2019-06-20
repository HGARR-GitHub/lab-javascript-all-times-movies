/* eslint no-restricted-globals: 'off' */
let updMovies = []

// Turn duration of the movies from hours to minutes 

const turnHoursToMinutes = (listMovies) => {
  
  updMovies = listMovies.map((movie) => {
    
    let hours = 0
    let min = 0
    let posH = 0
    let posMin = 0
    const minMovies = {}

    //determine hours
    posH = movie.duration.indexOf("h")
    if (posH == -1){
      hours = 0
    } else {
      hours = parseInt(movie.duration.substring(0, posH))
    }

    //determine minutes
    posMin = movie.duration.indexOf("min")
    if (posMin == -1){
      min = 0
    } else {
      min = parseInt(movie.duration.substring(posH+1, posMin))
    }
    
    minMovies.title = movie.title
    minMovies.year = movie.year
    minMovies.director = movie.director
    minMovies.duration = (hours*60 + min).toString()
    minMovies.genre = movie.genre
    minMovies.rate = movie.rate

    return minMovies
  })
  
}

turnHoursToMinutes(movies)


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
