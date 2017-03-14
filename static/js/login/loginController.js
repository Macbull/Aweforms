(function () {
  "use strict";

  angular
  .module('app.login.controllers')
  .controller("loginCtrl", loginCtrl);

  loginCtrl.$inject = ["$scope", "Auth", "$location", "Global", "Forms", "Form"];

  /**
  * @namespace loginCtrl
  **/
  function loginCtrl($scope, Auth, $location, Global, Forms, Form) {
    $scope.auth = Auth;
    $scope.signIn = function () {
      $scope.auth.$signInWithPopup("google").then(function (firebaseUser) {
      })
      .catch(function (error) {
        console.log("Authentication failed:", error);
      });
    };
    $scope.signOut = function() {
        Forms.destroyData();
        Form.destroyData();
        $scope.auth.$signOut();
    };
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.firebaseUser = firebaseUser;
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
