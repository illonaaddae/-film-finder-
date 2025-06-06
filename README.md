# 🎬 Film Finder

Film Finder is a modern web application that lets you discover random movies by genre, view cast and release details, and interact with movies by liking or disliking them. The app features a persistent like/dislike system, a responsive design, and a dark/light mode toggle with animated icons.

## Features

- **Discover Movies:** Get a random movie from your selected genre using the TMDB API.
- **Movie Details:** View movie poster, title, overview, release date (formatted), and main cast.
- **Like/Dislike:** Like or dislike movies, with your choices and like counts saved in your browser.
- **Persistent Storage:** All likes, dislikes, and counts are stored in `localStorage` for a consistent experience.
- **Dark/Light Mode:** Toggle between dark and light themes with a stylish sun/moon icon button.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Animated UI:** Movie posters animate on load and on hover for a modern feel.

## Setup

1. Create a file at `public/api-key.js` with the following content:

   ```js
   const tmdbKey = "YOUR_TMDB_API_KEY_HERE";
   ```

## API Key Notice

This project includes a TMDB API key for demonstration and educational purposes only.  
If you fork or clone this repository, you are encouraged to use your own TMDB API key.  
You may remove or replace the provided key at any time.

**Never use this key for production or commercial purposes.**

## Demo

**Desktop**
![Desktop Screenshot](</public/screenshots/127.0.0.1_8080_(Readme).png>)
![Desktop Screenshot](</public/screenshots/127.0.0.1_8080_(web showcase) (1).png>)

**IPad**
![Mobile Screenshot](</public/screenshots/127.0.0.1_8080_(iPad%20Air).png>)

**Mobile**
![Mobile Screenshot](</public/screenshots/127.0.0.1_8080_(iPhone%2012%20Pro)%20(1).png>)

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- [TMDB API Key](https://www.themoviedb.org/documentation/api) (already included in the code for demo purposes)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/film-finder.git
   cd film-finder
   ```

2. **Open the project:**
   - Open `index.html` in your browser.

### Usage

1. Select a genre from the dropdown.
2. Click **Let's Play!** to get a random movie.
3. View the movie details, cast, and release date.
4. Like or dislike the movie using the thumbs up/down buttons.
5. Toggle between dark and light mode using the sun/moon button at the top left.

### Customization

- **API Key:** Replace the TMDB API key in `public/script.js` with your own for production use.
- **Styling:** Edit `public/style.css` to further customize the look and feel.

## Technologies Used

- HTML5, CSS3 (with CSS variables and transitions)
- JavaScript (ES6+)
- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Font Awesome](https://fontawesome.com/) for icons

## Folder Structure

```
/public
  ├── helpers.js
  ├── script.js
  ├── style.css
index.html
```

## Credits

- Movie data and images provided by [TMDB](https://www.themoviedb.org/).
- Icons by [Font Awesome](https://fontawesome.com/).

## License

This project is for educational purposes.  
Feel free to fork and modify!

## License

&copy; 2025 Oceaniccoder. All rights reserved.

This project is for personal and educational use.  
Feel free to fork and adapt with credit!

---

_Built with ❤️ by Illona Addae_
