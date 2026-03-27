const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();


// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Server kann sonst den JSON-Body nicht lesen
app.use(bodyParser.json());

// get endpoint für alle Filme - gibt Array zurück
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and return the movies from 
     the model as an array */
  res.json(Object.values(movieModel));
});

// get endpoint für einzelnen Film - gibt Objekt zurück oder 404, wenn nicht gefunden
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */
  const imdbID = req.params.imdbID;
  const movie = movieModel[imdbID];

  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
});

/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */


     // PUT anfrage
app.put('/movies/:imdbID', function (req, res) {
  // ID wird aus URL gehotl
  const imdbID = req.params.imdbID;
  const movie = req.body;

  if (movieModel[imdbID]) {
    // Wenn ID schon gibt -> update
    movieModel[imdbID] = movie;
    res.sendStatus(200);
  } else {
    // Film gibt noch nicht -> creation
    // macht wenig Sinn weil über "EDit" kommt man sowieso nur zu
    // diesem einen Film zu bearbeiten
    movieModel[imdbID] = movie;
    res.status(201).json(movieModel[imdbID]);
  }





  
});

app.listen(3000);

console.log("Server now listening on http://localhost:3000/");