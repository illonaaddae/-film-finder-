// Populate dropdown menu with all the available genres

const populateGenreDropdown = (genres) => {
  const select = document.getElementById("genres");

  for (const genre of genres) {
    let option = document.createElement("option");
    option.value = genre.id;
    option.text = genre.name;
    select.appendChild(option);
  }
};

// Returns the current genre selection from the dropdown menu

const getSelectedGenre = () => {
  const selectedGenre = document.getElementById("genres").value;
  return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
  const btnDiv = document.getElementById("likeOrDislikeBtns");
  btnDiv.removeAttribute("hidden");
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
  const moviePosterDiv = document.getElementById("moviePoster");
  const movieTextDiv = document.getElementById("movieText");
  moviePosterDiv.innerHTML = "";
  movieTextDiv.innerHTML = "";
};

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
  if (window.currentMovieInfo) {
    saveMoviePreference(window.currentMovieInfo, "like");
    incrementLikeCount(window.currentMovieInfo);
  }
  clearCurrentMovie();
  showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
  if (window.currentMovieInfo) {
    saveMoviePreference(window.currentMovieInfo, "dislike");
  }
  clearCurrentMovie();
  showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
  const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

  const posterImg = document.createElement("img");
  posterImg.setAttribute("src", moviePosterUrl);
  posterImg.setAttribute("id", "moviePoster");

  return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
  const titleHeader = document.createElement("h1");
  titleHeader.setAttribute("id", "movieTitle");
  titleHeader.innerHTML = title;

  return titleHeader;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
  const overviewParagraph = document.createElement("p");
  overviewParagraph.setAttribute("id", "movieOverview");
  overviewParagraph.innerHTML = overview;

  return overviewParagraph;
};

// Create HTML for release date
const createReleaseDate = (date) => {
  const dateP = document.createElement("p");
  dateP.setAttribute("id", "movieDate");

  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  dateP.innerHTML = ` <span class="release-label">Release Date:</span> ${formatted}`;
  return dateP;
};
// Create HTML for cast
const createCastList = (castArr) => {
  const castP = document.createElement("p");
  castP.setAttribute("id", "movieCast");
  castP.innerHTML = `<span class="cast-label">Cast:</span> ${castArr.join(
    ", "
  )}`;
  return castP;
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  return randomMovie;
};

const incrementLikeCount = (movie) => {
  const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}");
  likeCounts[movie.id] = (likeCounts[movie.id] || 0) + 1;
  localStorage.setItem("likeCounts", JSON.stringify(likeCounts));
};

const getLikeCount = (movieId) => {
  const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}");
  return likeCounts[movieId] || 0;
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo, castArr) => {
  const moviePosterDiv = document.getElementById("moviePoster");
  const movieTextDiv = document.getElementById("movieText");
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");
  const castList = createCastList(castArr);

  // Create HTML content containing movie info
  const moviePoster = createMoviePoster(movieInfo.poster_path);
  const titleHeader = createMovieTitle(movieInfo.title);
  const overviewText = createMovieOverview(movieInfo.overview);
  const releaseDate = createReleaseDate(movieInfo.release_date);

  // Like count
  const likeCount = getLikeCount(movieInfo.id);
  const likeCountP = document.createElement("p");
  likeCountP.setAttribute("id", "likeCount");
  likeCountP.innerHTML = `<span class="like-count-label">Likes:</span> ${likeCount}`;

  // Append title, poster, and overview to page
  moviePosterDiv.appendChild(moviePoster);
  movieTextDiv.appendChild(titleHeader);
  movieTextDiv.appendChild(overviewText);
  movieTextDiv.appendChild(castList);
  movieTextDiv.appendChild(releaseDate);
  movieTextDiv.appendChild(likeCountP);

  showBtns();
  likeBtn.onclick = likeMovie;
  dislikeBtn.onclick = dislikeMovie;
};
