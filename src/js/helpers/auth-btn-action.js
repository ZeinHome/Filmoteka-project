import { refs } from '../components/authorization/auth';
function onLoginBtn() {
  refs.loginForm.classList.remove('is-hidden');
  refs.formWrap.classList.remove('is-hidden');
  refs.regForm.classList.add('is-hidden');
  refs.homeBtn.classList.remove('nav__current');
  refs.loginBtn.classList.add('nav__current');
  refs.regBtn.classList.remove('nav__current');
}

function onRegBtn() {
  refs.regForm.classList.remove('is-hidden');
  refs.formWrap.classList.remove('is-hidden');
  refs.loginForm.classList.add('is-hidden');
  refs.regBtn.classList.add('nav__current');
  refs.loginBtn.classList.remove('nav__current');
}

export { onLoginBtn, onRegBtn };
