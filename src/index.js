import "./js/helpers/darkThema";
import "./js/helpers/cursor";
import apiService from "./js/apiService";
import renderGallery from "./js/components/startPage/movieGallary";
import { renderPaginationButtons } from "./js/components/pagination/pagination";
import openModal from "./js/components/modal/modal-open";
import NProgress from 'nprogress';
import './js/components/team-modal';
import onSearchButton from "./js/components/search/movieSearch";
import './js/components/authorization/auth-page-close'
import './js/helpers/sliderTrendingMovies';
import { renderMovieCardsSlider } from './js/templates/renderMovieCardsSlider';
import './js/helpers/back-to-top';
import * as auth from './js/components/authorization/auth';
import {markupGallery} from './js/templates/startPageMarkup'
import { watchedArr, queueArr } from './js/components/modal/modal-open'
import addToLibrary from './js/components/library/addToLibrary';
import removeFromLibrary from './js/components/library/removeFromLibrary';

let allGenres;
const mainContainer = document.querySelector('.movie-card-list');

// NProgress.start();
openModal(mainContainer);


apiService.fetchGenresList().then((data)=> {

  allGenres = data;
});


apiService.fetchTrendData().then((data)=> {


  const filmData = renderGallery(data.results, allGenres);
  const markupMovie = markupGallery(filmData)
  mainContainer.insertAdjacentHTML("beforeend", markupMovie);
  // NProgress.done()
  renderMovieCardsSlider(data.results);



  const addToWatchedBtn = document.querySelectorAll('.btn-watche');
  const addToQueueBtn = document.querySelectorAll('.btn-queue');

  addToWatchedBtn.forEach(btn => {
    watchedArr.forEach(obj => {
      
      if (obj.id === Number(btn.dataset.id)) {
        btn.classList.add('pressed');
        btn.textContent = 'Remove from Watched';
        
      }
    });
  })
  
  addToQueueBtn.forEach(btn => {
    queueArr.forEach(obj => {
    
      if (obj.id === Number(btn.dataset.id)) {
        btn.classList.add('pressed');
        btn.textContent = 'Remove from Queue';
        
      }
    });
  })




  renderPaginationButtons(data.total_pages, data.page);


}).catch(error => console.log(error))




mainContainer.addEventListener('click', onListClick);


async function onListClick(e) {
  if (!e.target.dataset.target) {
    return
  }
  
  const filmId = e.target.dataset.id;
  const fullMovieInfo = await apiService.fetchFullMovieInfo(filmId);



  if (e.target.dataset.target === "watched") {
    e.target.classList.toggle('pressed');

    if (e.target.classList.contains('pressed')) {
      e.target.textContent = 'Remove from Watched';
      addToLibrary(fullMovieInfo, watchedArr, e.target.dataset.target);

      return;
    }
    
    e.target.textContent = 'Add to Watched';
    removeFromLibrary(filmId, watchedArr, e.target.dataset.target);
            
  }

  if (e.target.dataset.target === "queue") {
    e.target.classList.toggle('pressed');

    if (e.target.classList.contains('pressed')) {
      e.target.textContent = 'Remove from Queue';
      addToLibrary(fullMovieInfo, queueArr, e.target.dataset.target);
      return
    }
    
    e.target.textContent = 'Add to Queue';
    removeFromLibrary(filmId, queueArr, e.target.dataset.target);
            
  }



}

