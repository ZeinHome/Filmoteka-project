import { ref } from "firebase/database"

const refs ={
    authPage: document.querySelector(".form-auth"),
    authCloseBtn: document.querySelector(".auth-page__btn-close")
}

refs.authCloseBtn.addEventListener('click', onAuthPageClose)

function onAuthPageClose() {
    refs.authPage.classList.add("is-hidden")
 
}
// window.addEventListener("keydown", onEscPress);
// function onEscPress(event) {
//     if (event.code === "Escape") {
//         instance.close();
//         onModalClose();
//     }
// }
// function onModalClose() {
//     window.removeEventListener("keydown", onEscPress);
// }