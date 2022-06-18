import noPoster from '../../images/no-poster.jpg';
const IMG_URL= `https://image.tmdb.org/t/p/w500`;
const swiperContainer = document.querySelector('.swiper-wrapper');

function renderMovieCardsSlider(results) {
	
	const markup = results.map(({ poster_path, id }) => {
		
		let imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster;		
		
		return `<div class="swiper-slide">
				<img src="${imagePoster}" alt="poster" class="slide-poster" data-id="${id}"/>
			</div>`;
    }).join(''); 
  swiperContainer.insertAdjacentHTML("beforeend", markup);
}
export { renderMovieCardsSlider };