(function () {
  'use strict';

  //---------------------------------------Theme
  angular.module("app")
  .config(mdTheme);

  mdTheme.$inject = ["$mdThemingProvider"];

  function mdTheme($mdThemingProvider) {
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
  }


})();
