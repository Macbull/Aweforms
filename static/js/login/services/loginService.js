(function () {
    'use strict';

    angular
        .module('app.login.services')
        .factory("Auth", Auth);

        Auth.$inject = ["$firebaseAuth"];

        function Auth($firebaseAuth) {
          return $firebaseAuth();
        }

})();
