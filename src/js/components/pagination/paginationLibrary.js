import renderLibrary from '../../templates/movieCardLibrary';

const paginationList = document.querySelector('.pagination');
const cardsContainer = document.querySelector('.movie-card-list');

const notesOnPage320 = 4;
const notesOnPage768 = 8;
const notesOnPage1024 = 9;
let globalPage = 0;
let data = [];


function renderPaginationBTN(arrays, page, allPages) {
    data = arrays;
    let paginationMarkup = '';
    let beforePreviousPage = +page - 2;
    let previousPage = +page - 1;
    let nextPage = +page + 1;
    let afterNextPage = +page + 2;
    globalPage = +page;
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
    changeScreenDevice(data);
    window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
    });
}

function resetPage() {
    cardsContainer.innerHTML = '';
}

function resetPagination() {
    paginationList.innerHTML = '';
}

function changeScreenDevice(arrays) {
    const mediaQuery320 = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
    const mediaQuery768 = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
    const mediaQuery1024 = window.matchMedia('(min-width: 1024px)');
    function mediaQuery320Handler(mq) {
        if (mq.matches) {
            let start = (globalPage - 1) * notesOnPage320;
            let end = start + notesOnPage320;
            renderLibrary(arrays.slice(start, end));
            renderPaginationBTN(arrays, globalPage, Math.ceil(arrays.length / notesOnPage320));
        }
    }
    function mediaQuery768Handler(mq) {
        if (mq.matches) {
            let start = (globalPage - 1) * notesOnPage768;
            let end = start + notesOnPage768;
            renderLibrary(arrays.slice(start, end));
            renderPaginationBTN(arrays, globalPage, Math.ceil(arrays.length / notesOnPage768));
        }
    }
    function mediaQuery1024Handler(mq) {
        if (mq.matches) {
            let start = (globalPage - 1) * notesOnPage1024;
            let end = start + notesOnPage1024;
            renderLibrary(arrays.slice(start, end));
            renderPaginationBTN(arrays, globalPage, Math.ceil(arrays.length / notesOnPage1024));
        }
    }
    mediaQuery320.addListener(mediaQuery320Handler);
    mediaQuery768.addListener(mediaQuery768Handler);
    mediaQuery1024.addListener(mediaQuery1024Handler);
    mediaQuery320Handler(mediaQuery320);
    mediaQuery768Handler(mediaQuery768);
    mediaQuery1024Handler(mediaQuery1024);
}
export { renderPaginationBTN, resetPagination };
