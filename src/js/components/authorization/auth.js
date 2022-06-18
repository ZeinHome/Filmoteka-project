import app from '../../helpers/initialize-firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from 'firebase/firestore';
import apiService from '../../apiService';
import { onLoginBtn, onRegBtn } from '../../helpers/auth-btn-action';

const db = getFirestore(app);
const auth = getAuth();

const refs = {
  formWrap: document.querySelector('.form-auth'),
  loginForm: document.querySelector('[name="loginForm"]'),
  regForm: document.querySelector('[name="regForm"]'),
  regBtn: document.querySelector('.nav-item__reg'),
  loginBtn: document.querySelector('.nav-item__login'),
  libBtn: document.querySelector('.nav-item__lib'),
  logoutBtn: document.querySelector('.nav-item__logout'),
  homeBtn: document.querySelector('.nav__home'),
};

refs.regForm.addEventListener('submit', regNewUser);
refs.loginForm.addEventListener('submit', loginUser);
refs.logoutBtn.addEventListener('click', logoutUser);
refs.loginBtn.addEventListener('click', onLoginBtn);
refs.regBtn.addEventListener('click', onRegBtn);

onAuthStateChanged(auth, async user => {
  if (user) {
    ifUserLogged();
  }
  if (!user) {
    ifUserLoggedOut();
  }
});

function regNewUser(e) {
  e.preventDefault();
  const email = e.target.elements.emailReg.value.trim();
  const password = e.target.elements.passwordReg.value.trim();
  if (email === '' || password === '') {
    refs.regForm.querySelector('.error').innerHTML =
      'Input fields are not filled';
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async userCredential => {
     
      try {
        const docRef = await addDoc(collection(db, 'users'), {
          email: email,
          password: password,
          watched: [],
          queue: [],
        });
        refs.regForm.querySelector('.error').innerHTML = '';
      } catch (error) {}
    })
    .catch(error => {
      console.log(error.message);
      if (error.message.includes('email-already-in-use')) {
        refs.regForm.querySelector('.error').innerHTML = 'Email already in use';
        return;
      }
      if (error.message.includes('weak-password')) {
        refs.regForm.querySelector('.error').innerHTML =
          'Password should be at least 6 characters';
        return;
      }
    });
}

async function loginUser(e) {
  e.preventDefault();
  const email = e.target.elements.emailLogin.value.trim();
  const password = e.target.elements.passwordLogin.value.trim();

  if (email === '' || password === '') {
    refs.loginForm.querySelector('.error').innerHTML =
      'Input fields are not filled';
    return;
  }

  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      refs.loginForm.querySelector('.error').innerHTML = '';
    })
    .catch(error => {
      console.log(error);
      if (error.message.includes('wrong-password')) {
        refs.loginForm.querySelector('.error').innerHTML = 'Wrong password';
        return;
      }
      if (error.message.includes('user-not-found)')) {
        refs.loginForm.querySelector('.error').innerHTML =
          'User email not found';
        return;
      }
      if (error.message.includes('too-many-requests)')) {
        refs.loginForm.querySelector('.error').innerHTML =
          ' Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
        return;
      }
    });
}

function logoutUser(e) {
  e.preventDefault();
  signOut(auth);
  refs.loginBtn.classList.remove('nav__current');
}

function ifUserLogged() {
  refs.logoutBtn.classList.remove('is-hidden');
  refs.libBtn.classList.remove('is-hidden');
  refs.loginBtn.classList.add('is-hidden');
  refs.regBtn.classList.add('is-hidden');
  refs.regForm.classList.add('is-hidden');
  refs.formWrap.classList.add('is-hidden');
  refs.homeBtn.classList.add('nav__current');
}

function ifUserLoggedOut() {
  refs.loginBtn.classList.remove('is-hidden');
  refs.regBtn.classList.remove('is-hidden');
  refs.logoutBtn.classList.add('is-hidden');
  refs.libBtn.classList.add('is-hidden');
}

async function getCurrentUserId() {
  const userID = await getCurrentUserDoc().then(doc => {
    if (doc === undefined) {
      return;
    }
    return doc.id;
  });

  return userID;
}

async function getCurrentUserDoc() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  let document;
  if (auth.currentUser === null) {
    return;
  }
  querySnapshot.forEach(async doc => {
    try {
      if (doc.data().email === auth.currentUser.email) {
        document = doc;
      }
    } catch (error) {}
  });

  return document;
}
export { refs, logoutUser };
