// Film laden, seine Daten ins Formular einfügen, später wieder aus dem 
// Formular auslesen können und bei Cancel zurück zur Übersicht gehen


// bekommt ein Film Objekt übergeben - Werte in die Formularfelder einfügen
function setMovie(movie) {
  //Schleife durch alle Formularbestandteile
  for (const element of document.forms[0].elements) {
    const name = element.id;
    const value = movie[name];

    // Genres ist kein normales Textfeld -> mehrere Optionen zur Auswahl
    if (name === "Genres") {
      const options = element.options;
      for (let index = 0; index < options.length; index++) {
        const option = options[index];
        // jede Option wird durchgegangen ob dieses Genre im Film vorkommt
        option.selected = value.indexOf(option.value) >= 0;
      }
    } else if (
      // Sonderfall Actors, Directors und Writers
      name === "Actors" ||
      name === "Directors" ||
      name === "Writers"
    ) {
      // Arrays als Text mit Komma anzeigen
      element.value = value.join(", ");
    } else {
      element.value = value;
    }
  }
}

// sammelt also alle aktuellen Eingaben aus dem Formular und baut daraus wieder ein Filmobjekt
function getMovie() {
  const movie = {};

  const elements = Array.from(document.forms[0].elements).filter(
    (element) => element.id,
  );

  // Geh jedes Formularfeld einzeln durch
  for (const element of elements) {
    const name = element.id;

    let value;

    // Sonderfall weil es kann mehrere werte gleichzeitig haben
    if (name === "Genres") {
      value = [];
      const options = element.options;
      // wir gehen jede Option durch
      for (let index = 0; index < options.length; index++) {
        const option = options[index];
        // Nur ausgewählte nehmen
        if (option.selected) {
          value.push(option.value);
        }
      }
    } else if (
      // Zahlenfehlder
      name === "Metascore" ||
      name === "Runtime" ||
      name === "imdbRating"
    ) {
      value = Number(element.value);
    } else if (
      name === "Actors" ||
      name === "Directors" ||
      name === "Writers"
    ) {
      // Leerzeichen entfernen
      value = element.value.split(",").map((item) => item.trim());
    } else {
      value = element.value;
    }

    movie[name] = value;
  }

  return movie;
}


// Nimm alle Eingaben vom User und speichere sie am Server
function putMovie() {
  /* Task 3.3. 
    - Get the movie data using getMovie()
    - Configure the XMLHttpRequest to make a PUT to /movies/:imdbID
    - Set the 'Content-Type' appropriately for JSON data
    - Configure the function below as the onload event handler
    - Send the movie data as JSON
  */

  const movie = getMovie();

  // Request erstellen - um mit Server zu sprechen
  const xhr = new XMLHttpRequest();
  // PUT anfrage konfigurieren - URL mit imdbID aus movie Objekt
  xhr.open("PUT", "/movies/" + movie.imdbID);
  xhr.setRequestHeader("Content-Type", "application/json");


  // Erfogsnachweis
  xhr.onload = function () {
    if (xhr.status == 200 || xhr.status === 204 || xhr.status === 201) {
      location.href = "index.html";
    } else {
      alert("Saving of movie data failed. Status code was " + xhr.status);
    }
  };

  xhr.send(JSON.stringify(movie));
}

/** Loading and setting the movie data for the movie with the passed imdbID */

// sorgt, dass Daten geladen und eingefügt werden, wenn die Seite geladen wird
// ID wird aus URL geholt, damit man beim richtigen Film landet
const imdbID = new URLSearchParams(window.location.search).get("imdbID");

if (!imdbID) {
  alert("No imdbID found - try again");
  location.href = "index.html";
} else {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/movies/" + imdbID);
  xhr.onload = function () {
    if (xhr.status === 200) {
      setMovie(JSON.parse(xhr.responseText));
    } else if (xhr.status === 404) {
      alert("Movie not found");
      location.href = "index.html";
    } else {
      alert(
        "Loading of movie data failed. Status was " +
          xhr.status +
          " - " +
          xhr.statusText,
      );
    }
  };

  xhr.send();
}

// Cancel Button bringt zurück zur Übersicht
window.onload = function () {
  const cancelButton = document.getElementById("cancelButton");

  cancelButton.onclick = function () {
    location.href = "index.html";
  };
};