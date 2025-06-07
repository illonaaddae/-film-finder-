const tmdbKey = "91658a93df8a03fa45994887fad95a7f";

const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie";
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;

  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;

  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const movieInfo = await response.json();
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetch cast for a movie
const getMovieCast = async (movieId) => {
  const creditsEndpoint = `/movie/${movieId}/credits?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${creditsEndpoint}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.cast.slice(0, 5).map((member) => member.name);
    }
  } catch (error) {
    console.log(error);
  }
  return [];
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }

  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  const castArr = await getMovieCast(info.id);

  displayMovie(info, castArr);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;

const themeToggle = document.getElementById("themeToggle");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

function updateThemeIcons() {
  if (document.body.classList.contains("light-mode")) {
    // Show moon icon (to switch to dark mode)
    moonIcon.style.display = "";
    sunIcon.style.display = "none";
  } else {
    // Show sun icon (to switch to light mode)
    moonIcon.style.display = "none";
    sunIcon.style.display = "";
  }
}
themeToggle.onclick = () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light-mode") ? "light" : "dark"
  );
  updateThemeIcons();
};

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}
updateThemeIcons();
