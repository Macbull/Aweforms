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
  var app = angular.module("aweform", ["firebase","ngMaterial","app.login","app.routes","app.global","app.forms", "ngRoute","ngAnimate"]);

  //---------------------------------------Theme
  app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('grey',{
      'default': '100', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100'
    })
    .accentPalette('blue', {
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100'
    })
    .warnPalette('grey',{
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100'
    });
  });

  app.run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $location.path("/home");
      }
    });
  }]);

}());
