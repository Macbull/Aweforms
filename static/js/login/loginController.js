(function () {
  "use strict";

  angular
  .module('app.login.controllers')
  .controller("loginCtrl", loginCtrl);

  loginCtrl.$inject = ["$scope", "Auth", "$location", "Global"];

  /**
  * @namespace loginCtrl
  **/
  function loginCtrl($scope, Auth, $location, Global) {
    $scope.auth = Auth;
    $scope.signIn = function () {
      $scope.auth.$signInWithPopup("google").then(function (firebaseUser) {
        console.log("Signed in as:", firebaseUser);
      })
      .catch(function (error) {
        console.log("Authentication failed:", error);
      });
    };
    $scope.signOut = function() {
      this.forms = Global.forms;
      this.forms.$destroy();
      $scope.auth.$signOut();
    };
    // any time auth state changes, add the user data to scope
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.firebaseUser = firebaseUser;
      console.log(firebaseUser);
      if (Global.url){

      }
      else{
        if(firebaseUser){
          $location.path("#!/");
        }
        else{
          $location.path("/home");

        }
      }

    });
  }


}());
