import apiService from '../../apiService'
import renderMovieModal from './renderMovieModal';
import addToLibrary from '../library/addToLibrary';
import removeFromLibrary from '../library/removeFromLibrary';
import NProgress from 'nprogress';
import renderLibrary from '../../templates/movieCardLibrary';
import galleryBtnStateUpdate from './galleryBtnStateUpdate';
import { renderPaginationBTN, resetPagination } from '../pagination/paginationLibrary';
import { markupModal} from '../../templates/modalMarkup';

const refs = {                                                                  
    watchedMovies: document.querySelector('button[data-action="watched"]'),    
    queueMovies: document.querySelector('button[data-action="queue"]'),         

}

const modal = document.querySelector('.backdrop');

const modalMovieContainer = document.querySelector('.film-content');
const modalButtonClose = document.querySelector('.modal__button-close');
let watchedArr = JSON.parse(localStorage.getItem('watched')) ? JSON.parse(localStorage.getItem('watched')) : [];
let queueArr = JSON.parse(localStorage.getItem('queue')) ? JSON.parse(localStorage.getItem('queue')) : [];
export { watchedArr, queueArr };

export default function openModal(movieContainer) {

    movieContainer.addEventListener('click', onClick)

}

async function onClick(e) {
    //  NProgress.start();
    if (e.target.nodeName !== "IMG" && e.target.nodeName !== "H2") {
        return
    }

    document.body.classList.add("modal-open");
    modal.classList.remove('is-hidden');
    modal.classList.add('slideDownIn');
    modalButtonClose.addEventListener('click', modalClose);
    window.addEventListener("keyup", press);
    window.addEventListener("click", onCloseBackdropClick);
    // NProgress.done();
    const filmId = e.target.dataset.id;

    const fullMovieInfo = await apiService.fetchFullMovieInfo(filmId);
    const createMarkupFilmInModal =await  renderMovieModal(fullMovieInfo);
    const finalMarkupModal = markupModal(createMarkupFilmInModal);
    
    

    modalMovieContainer.insertAdjacentHTML("beforeend", finalMarkupModal);

     

    const addToWatchedBtn = document.querySelector('.btn-watched');
    const addToQueueBtn = document.querySelector('.btn-qweqwe');

    watchedArr.forEach(obj => {
        if (obj.id === Number(filmId)) {
            addToWatchedBtn.classList.add('pressed');
            addToWatchedBtn.textContent = 'Remove from Watched';
        }

    });
  
    queueArr.forEach(obj => {
        if (obj.id === Number(filmId)) {
            addToQueueBtn.classList.add('pressed');
            addToQueueBtn.textContent = 'Remove from Queue';
        }
    });

    const bodyOfLybrary = document.body.classList.contains('library') 
    const isWatchedActiv = refs.watchedMovies?.classList.contains('library-btn__isActive') 
    const isQueueActiv = refs.queueMovies?.classList.contains('library-btn__isActive') 

    addToWatchedBtn.addEventListener('click', () => {
        addToWatchedBtn.classList.toggle('pressed');

        if (addToWatchedBtn.classList.contains('pressed')) {
            addToWatchedBtn.textContent = 'Remove from Watched';
            addToLibrary(fullMovieInfo, watchedArr, addToWatchedBtn.dataset.target);

            if (isWatchedActiv) {
                bodyOfLybrary && changeScreenDevice(watchedArr);                             
                refs.watchedMovies?.classList.add('library-btn__isActive');             
                refs.queueMovies?.classList.remove('library-btn__isActive'); 

            }

        } else {
            addToWatchedBtn.textContent = 'Add to Watched';
            removeFromLibrary(filmId, watchedArr, addToWatchedBtn.dataset.target);

            if (isWatchedActiv) {                                                  
                bodyOfLybrary && changeScreenDevice(watchedArr);                                 
                refs.watchedMovies?.classList.add('library-btn__isActive');                 
                refs.queueMovies?.classList.remove('library-btn__isActive');  
            }                                                                           
        }

    });
    addToQueueBtn.addEventListener('click', () => {
        addToQueueBtn.classList.toggle('pressed');

        if (addToQueueBtn.classList.contains('pressed')) {
            addToQueueBtn.textContent = 'Remove from Queue';
            addToLibrary(fullMovieInfo, queueArr, addToQueueBtn.dataset.target);

            if (isQueueActiv) {
                bodyOfLybrary && changeScreenDevice(queueArr);                                        
                refs.queueMovies?.classList.add('library-btn__isActive');                       
                refs.watchedMovies?.classList.remove('library-btn__isActive');                  

            }
        } else {
            addToQueueBtn.textContent = 'Add to Queue';
            removeFromLibrary(filmId, queueArr, addToQueueBtn.dataset.target);

            if (isQueueActiv) {
                bodyOfLybrary && changeScreenDevice(queueArr);                                      
                refs.queueMovies?.classList.add('library-btn__isActive');                        
                refs.watchedMovies?.classList.remove('library-btn__isActive');
            }
        }
    });

}

function press(e) {
    if (e.code === "Escape") {
        modalClose();
        window.removeEventListener("keyup", press);
        modalButtonClose.removeEventListener('click', modalClose);
        galleryBtnStateUpdate();
    }
    return
}

function onCloseBackdropClick(e) {
    if (e.target.dataset.close === 'backdrop') {
        modalClose();
        galleryBtnStateUpdate();
    }
    return;
}

function modalClose(e) {
    document.body.classList.remove("modal-open");
    modal.classList.add('is-hidden');
    modal.classList.remove("slideDownIn")
    window.removeEventListener("keyup", press);
    window.removeEventListener("click", onCloseBackdropClick);
    modalButtonClose.removeEventListener('click', modalClose);
    modalMovieContainer.innerHTML = "";
    galleryBtnStateUpdate();
}

function changeScreenDevice(arrays) {
    const mediaQuery320 = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
    const mediaQuery768 = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
    const mediaQuery1024 = window.matchMedia('(min-width: 1024px)');
    function mediaQuery320Handler(mq) {
        if (mq.matches) {
            let page = 1;
            renderLibrary(arrays.slice(0, 4));
            resetPagination();
            renderPaginationBTN(arrays, page = 1, Math.ceil(arrays.length / 4));  
        }
    }
    function mediaQuery768Handler(mq) {
        if (mq.matches) {
            let page = 1;
            renderLibrary(arrays.slice(0, 8));
            resetPagination();
            renderPaginationBTN(arrays, page = 1, Math.ceil(arrays.length / 8));
        }
    }
    function mediaQuery1024Handler(mq) {
        if (mq.matches) {
            let page = 1;
            renderLibrary(arrays.slice(0, 9));
            resetPagination();
            renderPaginationBTN(arrays, page = 1, Math.ceil(arrays.length / 9));
        }
    }
    mediaQuery320.addListener(mediaQuery320Handler);
    mediaQuery768.addListener(mediaQuery768Handler);
    mediaQuery1024.addListener(mediaQuery1024Handler);
    mediaQuery320Handler(mediaQuery320);
    mediaQuery768Handler(mediaQuery768);
    mediaQuery1024Handler(mediaQuery1024);
}
