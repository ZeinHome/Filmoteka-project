import '../../helpers/darkThema';
import '../../helpers/cursor';
import openModal from '../modal/modal-open';
import renderLibrary from '../../templates/movieCardLibrary';
import {
  renderPaginationBTN,
  resetPagination,
} from '../pagination/paginationLibrary';
import '../team-modal';
import app from '../../helpers/initialize-firebase';
import { signOut, getAuth } from 'firebase/auth';

let watched = [];
let queue = [];
let page = 1;
const auth = getAuth();
const LAST_PRESSED_KEY = 'last-pressed-library-btn';
const refs = {
  moviesList: document.querySelector('.movie-card-list'),
  watchedMovies: document.querySelector('button[data-action="watched"]'),
  queueMovies: document.querySelector('button[data-action="queue"]'),
  sectionLibrary: document.querySelector('.section-library'),
  pagination: document.querySelector('.pagination'),
  libraryNavigationLinkBtn: document.querySelector('.library-navigation__link'),
  logoutLibBtn: document.querySelector('.nav__logout'),
};

refs.logoutLibBtn.addEventListener('click', logoutUser);

function logoutUser(e) {
  e.preventDefault();
  signOut(auth);
  window.location = '../../../index.html';
}

if (localStorage.getItem('watched') === null) {
  refs.sectionLibrary.innerHTML = `<h3 class="empty-container">Sorry, but this section is still empty:(</h3>`;
}

openModal(refs.moviesList);

if (sessionStorage.getItem(LAST_PRESSED_KEY) === 'queue') {
  onQueueMoviesClick();
}

else {
  onWatchedMoviesClick();
}

refs.watchedMovies.addEventListener('click', onWatchedMoviesClick);
refs.queueMovies.addEventListener('click', onQueueMoviesClick);

function onWatchedMoviesClick() {
  sessionStorage.setItem(LAST_PRESSED_KEY, 'watched');
  refs.watchedMovies.classList.add('library-btn__isActive');
  refs.queueMovies.classList.remove('library-btn__isActive');
  let watchedKey = localStorage.getItem('watched');
  if (watchedKey) {
    try {
      watched = JSON.parse(watchedKey);
    } catch (e) {
      console.log(e);
    }
  }
  if (sessionStorage.getItem(LAST_PRESSED_KEY) === 'watched') {
    changeScreenDevice(watched);
  }
}

function onQueueMoviesClick() {
  sessionStorage.setItem(LAST_PRESSED_KEY, 'queue');
  refs.queueMovies.classList.add('library-btn__isActive');
  refs.watchedMovies.classList.remove('library-btn__isActive');
  let queueKey = localStorage.getItem('queue');
  if (queueKey) {
    try {
      queue = JSON.parse(queueKey);
    } catch (e) {
      console.log(e);
    }
  }
  if (sessionStorage.getItem(LAST_PRESSED_KEY) === 'queue') {
    changeScreenDevice(queue);
  }
}

function changeScreenDevice(arrays) {
  const mediaQuery320 = window.matchMedia(
    '(min-width: 320px) and (max-width: 767px)'
  );
  const mediaQuery768 = window.matchMedia(
    '(min-width: 768px) and (max-width: 1023px)'
  );
  const mediaQuery1024 = window.matchMedia('(min-width: 1024px)');
  function mediaQuery320Handler(mq) {
    if (mq.matches) {
      renderLibrary(arrays.slice(0, 4));
      resetPagination();
      renderPaginationBTN(arrays, (page = 1), Math.ceil(arrays.length / 4));
    }
  }
  function mediaQuery768Handler(mq) {
    if (mq.matches) {
      renderLibrary(arrays.slice(0, 8));
      resetPagination();
      renderPaginationBTN(arrays, (page = 1), Math.ceil(arrays.length / 8));
    }
  }
  function mediaQuery1024Handler(mq) {
    if (mq.matches) {
      renderLibrary(arrays.slice(0, 9));
      resetPagination();
      renderPaginationBTN(arrays, (page = 1), Math.ceil(arrays.length / 9));
    }
  }
  mediaQuery320.addListener(mediaQuery320Handler);
  mediaQuery768.addListener(mediaQuery768Handler);
  mediaQuery1024.addListener(mediaQuery1024Handler);
  mediaQuery320Handler(mediaQuery320);
  mediaQuery768Handler(mediaQuery768);
  mediaQuery1024Handler(mediaQuery1024);
}
