(function () {
    'use strict';

    angular
        .module('app.routes',['ngRoute'])
        .config(config);

        config.$inject = ['$routeProvider'];
        function config($routeProvider){
          $routeProvider.when('/home',{
            templateUrl: '/home.html'
          })
          .when('/', {
            templateUrl: '/forms.html',
            controller: 'formsCtrl',
            controllerAs: 'ctrl',
            resolve: {
              "currentAuth": ["Auth", function(Auth) {
                return Auth.$requireSignIn();
              }]
            }
          })
          // .when('/form/:param',{
          //   templateUrl: '/form.html',
          //   controller: 'formController',
          //   controllerAs: 'ctrl',
          //   resolve: {
          //     "currentAuth": ["Auth", function(Auth) {
          //       return Auth.$waitForSignIn();
          //     }]
          //   }
          // })
          .otherwise('/');
}

})();
