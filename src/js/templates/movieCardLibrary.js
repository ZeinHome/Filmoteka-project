import noPoster from '../../images/no-poster.jpg';

const IMG_URL= `https://image.tmdb.org/t/p/w500`;
const moviesList = document.querySelector('.movie-card-list');

export default function renderLibrary(data) {
    const markup = data.map(({ poster_path, original_title, vote_average, genres, release_date, id }) => {
      let imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster;

      if (original_title === "") {
          original_title = "Sorry, no title for the movie.";
      }else if (original_title.length > 40){
        original_title =  original_title.slice(0, 40) + "...";
       }

      const genresNames = genres.reduce((acc, { name }, index) => {
          if (!genres.length) {
            return acc;
          }
          else if (index <= 1) {
            if (index <= genres.length - 2) {
              return acc + name + ', ';
            }
            return acc + name + ' ';
          }
          else if (index === 2) {
            return acc + 'Others';
          }
          return acc;
        },'');	
          const releaseYear = release_date.split("-").slice(0, 1);
          return `<li  class="movie-card-item">
          <div class="movie-poster__container">
            <img src="${imagePoster}" alt="poster" class="imagePoster" data-id="${id}"/>
          </div>
          <div class="movie-card-item__info">
            <h2 class="movie-card-item__title" data-id="${id}">${original_title}</h2>
            <p class="movie-card-item__text">${genresNames?genresNames:"No genres"} | ${releaseYear} <span class="rating">${vote_average}</span></p>
        </li>`;
      }).join('');
    moviesList.innerHTML = markup;
}
