const movies = {
  
  // Objekt statt Array - schneller und unkomplizierter
    tt0317219: {
    imdbID: "tt0317219",
    Title: "Cars",
    Released: "2006-06-09",
    Runtime: 116,
    Genres: ["Animation", "Adventure", "Comedy"],
    Directors: ["John Lasseter", "Joe Ranft"],
    Writers: ["John Lasseter", "Joe Ranft", "Jorgen Klubien"],
    Actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    Plot: "On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
    Metascore: 73,
    imdbRating: 7.3
  },

  tt8289930: {
    imdbID: "tt8289930",
    Title: "Formula 1: Drive to Survive",
    Released: "2019-03-08",
    Runtime: 60,
    Genres: ["Documentary", "Sport"],
    Directors: [""],
    Writers: [""],
    Actors: [
      "Mercedes-AMG Petronas F1 Team",
      "McLaren Formula 1 Team",
      "Scuderia Ferrari"
    ],
    Plot: "Docuseries following the FIA Formula One World Championship.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNTkyYzhiYzctZGRiOC00ODM1LTg0MDQtYzVmMzcyNTI5MDEwXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 0,
    imdbRating: 8.5
  },

  tt0133093: {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Released: "1999-03-31",
    Runtime: 136,
    Genres: ["Action", "Sci-Fi"],
    Directors: ["Lana Wachowski", "Lilly Wachowski"],
    Writers: ["Lana Wachowski", "Lilly Wachowski"],
    Actors: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss"
    ],
    Plot: "A hacker discovers reality is a simulation.",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 73,
    imdbRating: 8.7
  }
}

//braucht man später für GET / PUT - gibt Objekt nach außen frei
module.exports = movies
