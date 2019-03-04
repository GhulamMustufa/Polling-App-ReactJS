import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyB-xtY-ffGEJygobBS3CPLNPKsBgvtBXuQ",
  authDomain: "simple-html-file.firebaseapp.com",
  databaseURL: "https://simple-html-file.firebaseio.com",
  projectId: "simple-html-file",
  storageBucket: "simple-html-file.appspot.com",
  messagingSenderId: "589509938357"
  };
  var fire=firebase.initializeApp(config);

  export default fire