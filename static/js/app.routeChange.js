(function () {
  'use strict';


  angular.module("app")
  .run(routeChange);

  routeChange.$inject = ["$rootScope", "$location"];

  function routeChange($rootScope, $location) {

  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    if (error === "AUTH_REQUIRED") {
      $location.path("/home");
    }
  });
  }

})();
