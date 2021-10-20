(function (window) {
  'use strict';
  var App = window.App || {};
  var FirebaseConfig = {
    apiKey: "AIzaSyDYVuN_-yRq0dyksYjd4uzJ4TkulggXo0Q",
    authDomain: "coffeerun-e925b.firebaseapp.com",
    projectId: "coffeerun-e925b",
    storageBucket: "coffeerun-e925b.appspot.com",
    messagingSenderId: "622667183864",
    appId: "1:622667183864:web:0f31e2ce2cb8612a3ded0d",
    measurementId: "G-3GP00KZ2B4"
  };

App.FirebaseConfig = FirebaseConfig;
firebase.initializeApp(App.FirebaseConfig);
window.App = App;
})(window);