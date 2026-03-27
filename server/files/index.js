// holt alle Filme vom Server und zeigt sie auf der Website an
// Herzstück der Startseite

window.onload = function () {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const bodyElement = document.querySelector("body");

    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      for (const movie of movies) {

        const article = document.createElement("article");

        // imdbID als id-Attribut setzen vom jeweiligen Film
        article.id = movie.imdbID;

        const title = document.createElement("h2");
        title.textContent = movie.Title;

        const poster = document.createElement("img");
        poster.src = movie.Poster;
        poster.alt = movie.Title + " poster";

        const released = document.createElement("p");
        released.className = "info";
        released.textContent = "Released: " + movie.Released;

        const runtime = document.createElement("p");
        runtime.className = "info";
        runtime.textContent = "Runtime: " + movie.Runtime + " min";

        const genresContainer = document.createElement("div");
        for (const g of movie.Genres) {
          const span = document.createElement("span");
          span.className = "genre";
          span.textContent = g;
          genresContainer.appendChild(span);
        }

        const directors = document.createElement("p");
        directors.textContent = "Directors: " + movie.Directors.join(", ");

        const writers = document.createElement("p");
        writers.textContent = "Writers: " + movie.Writers.join(", ");

        const actors = document.createElement("p");
        actors.textContent = "Actors: " + movie.Actors.join(", ");

        const plot = document.createElement("p");
        plot.textContent = movie.Plot;

        const metascore = document.createElement("p");
        metascore.className = "info";
        metascore.textContent = "Metascore: " + movie.Metascore;

        const imdbRating = document.createElement("p");
        imdbRating.className = "info";
        imdbRating.textContent = "IMDb Rating: " + movie.imdbRating;

        // neu hinzugefügter EDIT Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.onclick = function () {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        article.appendChild(title);
        article.appendChild(poster);
        article.appendChild(released);
        article.appendChild(runtime);
        article.appendChild(genresContainer);
        article.appendChild(directors);
        article.appendChild(writers);
        article.appendChild(actors);
        article.appendChild(plot);
        article.appendChild(metascore);
        article.appendChild(imdbRating);
        article.appendChild(editButton);

        bodyElement.appendChild(article);
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };

  xhr.open("GET", "/movies");
  xhr.send();
};