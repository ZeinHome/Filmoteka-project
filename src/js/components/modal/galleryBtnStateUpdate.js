import { watchedArr, queueArr } from './modal-open';

export default function galleryBtnStateUpdate() {
    const libraryWatchedBtn = document.querySelectorAll('.btn-watche');
    const libraryQueueBtn = document.querySelectorAll('.btn-queue');
    
    libraryWatchedBtn.forEach(btn => {
        watchedArr.forEach(obj => {
            if (Number(btn.dataset.id) === obj.id) {
                btn.classList.add('pressed');
                btn.textContent = 'Remove from Watched';
            }
            else {
                btn.classList.remove('pressed');
                btn.textContent = 'Add to Watched';
            }
        })
    });
    
    libraryQueueBtn.forEach(btn => {
        queueArr.forEach(obj => {
            if (Number(btn.dataset.id) === obj.id) {
                btn.classList.add('pressed');
                btn.textContent = 'Remove from Queue';
            }
            else {
                btn.classList.remove('pressed');
                btn.textContent = 'Add to Queue';
            }
        })
    });
    watchedArr.forEach(obj => {
        libraryWatchedBtn.forEach(btn => {
            if (Number(btn.dataset.id) === obj.id) {
                btn.classList.add('pressed');
                btn.textContent = 'Remove from Watched';
            }
        })
    });
    queueArr.forEach(obj => {
        libraryQueueBtn.forEach(btn => {
            if (Number(btn.dataset.id) === obj.id) {
                btn.classList.add('pressed');
                btn.textContent = 'Remove from Queue';
            }
        })
    });
}