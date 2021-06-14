import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCGpNDks9O5yJGGLt_Vz7mByuGng9izPp0",
    authDomain: "please-work-book-santa.firebaseapp.com",
    projectId: "please-work-book-santa",
    storageBucket: "please-work-book-santa.appspot.com",
    messagingSenderId: "791090186418",
    appId: "1:791090186418:web:296e075e2e44acd91121ab"
  };


// Initialize Firebase
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
