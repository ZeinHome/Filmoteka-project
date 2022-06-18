import apiService from "../../apiService";
import renderGallery from "../startPage/movieGallary";
import { input } from "../../../js/apiService";
import NProgress from 'nprogress';
import {markupGallery} from '../../templates/startPageMarkup';


const mainContainer = document.querySelector('.movie-card-list');
const paginationList = document.querySelector('.pagination');

let globalPage = 0;
let allGenres;

function renderPaginationButtons(allPages, page) {
    let paginationMarkup = '';
    let beforePreviousPage = page - 2;
    let previousPage = page - 1;
    let nextPage = page + 1;
    let afterNextPage = page + 2;
    globalPage = page;

    if (allPages <= 1) {
        return;
    }

    if (page > 1) {
        paginationMarkup += `<li class="pagination-item pagination-arrow">&laquo</li>`;
    }

    if (page > 3) {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            paginationMarkup += `<li class="pagination-item pagination-pages">1</li>`;
        }
    }

    if (page > 2) {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && page > 4) {
            paginationMarkup += `<li class="pagination-item">...</li>`;
        }
        if (beforePreviousPage > 0) {
            paginationMarkup += `<li class="pagination-item pagination-pages">${beforePreviousPage}</li>`;
        }
    }

    if (previousPage > 0) {
        paginationMarkup += `<li class="pagination-item pagination-pages">${previousPage}</li>`;
    }

    paginationMarkup += `<li class="pagination-item pagination-pages current-page">${page}</li>`;

    if (page < allPages) {
        paginationMarkup += `<li class="pagination-item pagination-pages">${nextPage}</li>`;
    }

    if (page < allPages - 1) {

        if (page < allPages - 2) {
            paginationMarkup += `<li class="pagination-item pagination-pages">${afterNextPage}</li>`;
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && page < allPages - 3) {
                paginationMarkup += `<li class="pagination-item">...</li>`;
            }
        }
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            paginationMarkup += `<li class="pagination-item pagination-pages">${allPages}</li>`;
        }
    }

    if (page < allPages) {
        paginationMarkup += `<li class="pagination-item pagination-arrow">&raquo</li>`;
    }

    paginationList.innerHTML = paginationMarkup;

    paginationList.addEventListener('click', onPaginationChoice);
}

function onPaginationChoice(e) {
    if (e.target.nodeName !== 'LI') {
        return;
    }
    const value = e.target.textContent;

    switch (value) {
        case '«':
            globalPage -= 1;
            break;
        case '»':
            globalPage += 1;
            break;
        case '...':
            return;
        default:
            globalPage = value;
    }
    resetPage();

    NProgress.start();

    apiService.fetchGenresList().then((data) => {

        allGenres = data;
    })

    if (input.value) {
        apiService.movieSearch(globalPage)

            .then((data) => {
                NProgress.done();
                const filmData = renderGallery(data.results, allGenres);
                const markupMovie = markupGallery(filmData)
                mainContainer.insertAdjacentHTML("beforeend", markupMovie);

                renderPaginationButtons(data.total_pages, data.page);
            })
            .catch(error => console.log(error));
    } else {
        apiService.fetchTrendData(globalPage)
            .then((data) => {
                const filmData = renderGallery(data.results, allGenres);
                const markupMovie = markupGallery(filmData)
                mainContainer.insertAdjacentHTML("beforeend", markupMovie);
                renderPaginationButtons(data.total_pages, data.page);
            })
            .catch(error => console.log(error));
            NProgress.done();
    }
}

function resetPage() {
    mainContainer.innerHTML = '';
}

function resetPagination() {
    paginationList.innerHTML = '';
}

export { renderPaginationButtons };
export { resetPagination };
