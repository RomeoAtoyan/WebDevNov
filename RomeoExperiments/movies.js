const navContainer = document.querySelector(".nav_container");
const links = document.querySelectorAll(".nav_items li");
const linksContainer = document.querySelector(".nav_items");
const movieDescriptionText = document.querySelectorAll(
  ".movie_description span"
);
const movies = document.querySelectorAll(".movie");
const bgImages = [
  {
    id: 1,
    img: "./movieassets/moviecrop5.jpg",
  },
  {
    id: 2,
    img: "./movieassets/moviecrop4.jpg",
  },
  {
    id: 3,
    img: "./movieassets/moviecrop3.jpg",
  },
  {
    id: 4,
    img: "./movieassets/moviecrop2.jpg",
  },
  {
    id: 5,
    img: "./movieassets/moviecrop1.jpg",
  },
];

let count = 0;
navContainer.onmouseenter = () => {
  navContainer.style.backgroundImage = `url(${bgImages[count].img})`;
  navContainer.style.ba;
  if (count >= bgImages.length - 1) {
    count = 0;
  } else {
    count++;
  }
};

// const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

// getMovies(API_URL)

// function getMovies(url) {
//   fetch(url).then(res => res.json()).then(data => {
//     console.log(data)
//   })
// }