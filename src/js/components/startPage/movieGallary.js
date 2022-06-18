import noPoster from '../../../images/no-poster.jpg';
const IMG_URL= `https://image.tmdb.org/t/p/w500`;

 
export default function renderGallery(results, dataGenres) {
	const genres = dataGenres?.genres

    return results.map(({ poster_path, original_title, release_date, genre_ids, id }) => {

		if (original_title === "") {
        	original_title = "Sorry, no title for the movie.";
		}else if (original_title.length > 40){
			original_title =  original_title.slice(0, 40) + "...";
		   }

		if (!release_date) {
			release_date = "Expected";
		}

		const genresNames = genre_ids.reduce((acc, itemId, index) => {
			if (!genre_ids.length) {
				return acc;
			}

			if(index <= 1){
				const genreName = genres?.find(({id}) => id === itemId)

				if(index <= genre_ids.length - 2) {
					return acc + genreName?.name + ', ';
				}

				return acc + genreName?.name + ' ';
			} 
			
			if(index === 2) {
				return acc + "Others";
			} 
			return acc;
		}, "")

		const fullGenresNames = genres ? genresNames : "Other"
		const releaseYear = release_date?.split("-").slice(0, 1);
		const imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster; 

		return { id, imagePoster, original_title, releaseYear, fullGenresNames }

	})
    
}




