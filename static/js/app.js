(function () {
  //---------------------------------------Firebase Config
  var config = {
    apiKey: "AIzaSyCJhESPCrF9Raleqw844UDdj9s0Bb5x-dQ",
    authDomain: "firepad-examples.firebaseapp.com",
    databaseURL: "https://firepad-examples.firebaseio.com",
    storageBucket: "firepad-examples.appspot.com",
    messagingSenderId: "389100237294"
  }
  //---------------------------------------Firebase and Angular app initialization
  firebase.initializeApp(config);
  var app = angular.module("app",["firebase",
  "ngMaterial",
  "app.login",
  "app.routes",
  "app.global",
  "app.forms",
  "app.form",
  "ngRoute",
  "ngAnimate"]);


}());
