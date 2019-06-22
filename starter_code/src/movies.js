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
console.log ("Iteration 1")
console.log (updMovies)

// Get the average of all rates with 2 decimals 

const ratesAverage = (listMovies) => {
  const averageRating = listMovies.reduce((sumRating,curRate,index,arrMovie)=>
  {
    let calcValue = sumRating + parseFloat(curRate.rate)
    if (index === arrMovie.length-1){
      return calcValue/arrMovie.length
    }
  return calcValue
  },0)
  
  console.log ("Iteration 2")
  console.log ('Average rating is : ' + averageRating.toFixed(2) )

}

ratesAverage(movies)

// Get the average of Drama Movies

const ratesDramaAverage = (listMovies) => {
  let countDrama = 0
  let calcValue = 0
  const averageRating = listMovies.reduce((sumRating,curMovie,index,arrMovie)=>
  {
    if (curMovie.genre.indexOf("Drama")!= -1){
      calcValue = sumRating + parseFloat(curMovie.rate)
      countDrama = countDrama + 1
    }
    if (index === arrMovie.length-1){
      return calcValue/countDrama
    }
  
    return calcValue
  },0)
  
  console.log ("Iteration 3")
  console.log ('Count Drama movies : ' + countDrama + ' / Average Drama rating is : ' + averageRating.toFixed(2) )

}

ratesDramaAverage(movies)

// Order by time duration, in growing order

const orderByDuration = (listMovies) => {
  listMovies.sort((a,b) => {
    let duration_a = parseInt(a.duration)
    let duration_b = parseInt(b.duration)
    
    //console.log ("A : " + duration_a + " - B " + duration_b)
    if (duration_b>duration_a){
      return -1
    }

    if (duration_b<duration_a){
      return 1
    }

    if (duration_b==duration_a){
      let arrComp = []
      arrComp.push(a.title)
      arrComp.push(b.title)
      arrComp.sort()

      //if sorting swapped position of the elements
      //then return 1 so that movies are also swapped in the 
      //listMovies array
      if (arrComp[0] == b.title){
        return 1 
      } else { 
        return -1
      }  
    }
  
  })
  console.log ("Iteration 4")
  console.log(listMovies)
}

//use array with movies time updated to minutes from iteration 1

orderByDuration (updMovies)


// How many movies did STEVEN SPIELBERG
const howManyMovies = (listMovies) => {

  const spielbMovies = []

  listMovies.forEach((movie) => {

    if ((movie.genre.indexOf("Drama")!= -1) && movie.director == "Steven Spielberg") {
      spielbMovies.push(
        {
          title: movie.title,
          year: movie.year,
          director: movie.director,
          duration: movie.duration,
          genre: movie.genre,
          rate: movie.rate
        })
    }

  })

  console.log ("Iteration 5")
  console.log(spielbMovies)
}
    
howManyMovies(movies)


// Order by title and print the first 20 titles

const orderAlphabetically = (listMovies) => {

  let count = 0
  let arFirst20 = []

  //first order all movies based on the title
  listMovies.sort((a,b) => {
    
    if (a.title>b.tittle){
      return 1
    }

    if (a.title<b.title){
      return -1
    }

    return 0
  
  })

  //add the first 20 in a new array
  listMovies.forEach((movie) => {
    if (count < 20) {
      arFirst20.push(movie.title)
      count++
    }
  })
  
  return arFirst20

}

console.log ("Iteration 6")
console.log(orderAlphabetically(movies))


// Best yearly rate average

let arrYearMovies = []
let maxAvgRate = 0
 
movies.forEach((movie) => {

  //find the year and add the movie rate
  noYearFound = true
  for (i=0;i<arrYearMovies.length-1;i++){
    if (movie.year == parseInt(arrYearMovies[i].year)){
      noYearFound = false
      arrYearMovies[i].countMovies++ 
      arrYearMovies[i].cumRate += parseFloat(movie.rate)
    }
  }

  //add new year object to the array
  if (noYearFound){
    arrYearMovies.push({
      year: parseInt(movie.year),
      countMovies:1,
      cumRate:parseFloat(movie.rate),
      avgRate:0.0
    })
  }
  
})

//Calculate average for every year, set decimal to 2
//and determine max average,
arrYearMovies.forEach((movie) => {
  
  movie.cumRate = movie.cumRate.toFixed(2)
  movie.avgRate = (movie.cumRate / movie.countMovies).toFixed(2)

  if (maxAvgRate < movie.avgRate){
    maxAvgRate = movie.avgRate
  } 
})

//sort array DESC based on maxAvRage
arrYearMovies.sort((a,b) => {
  if (a.avgRate > b.avgRate){
    return -1
  } 

  if (a.avgRate < b.avgRate){
    return 1
  } 
  
  return 0
})

console.log ("Iteration 7")
console.log("Highest Year Average Rate : " + maxAvgRate)
console.log(arrYearMovies)

