
import noPoster from '../../../images/no-poster.jpg';
const IMG_URL= `https://image.tmdb.org/t/p/w500`;

export default function renderMovieModal({id, poster_path, original_title, vote_average,vote_count, popularity, overview, genres}) {

 
    let imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster;
    if (overview === "") {
        overview = "Sorry, no description for the movie.";
    }
    if (original_title === "") {
        original_title = "Sorry, no title for the movie.";
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
return {id, imagePoster, original_title,popularity, original_title,vote_average,vote_count, genresNames,overview}
}

