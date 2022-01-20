const firebaseConfig = {
    apiKey: "AIzaSyATfS1ku-zDipLesnKGEjvrYzhYTOvqCjQ",
    authDomain: "todolist-b6b19.firebaseapp.com",
    projectId: "todolist-b6b19",
    storageBucket: "todolist-b6b19.appspot.com",
    messagingSenderId: "46965473347",
    appId: "1:46965473347:web:87a213698cbedf095dd4f6",
    measurementId: "G-8TSF5QR3PQ"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore()