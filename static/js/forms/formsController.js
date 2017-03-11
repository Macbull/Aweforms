(function () {
  "use strict";

  angular
  .module('app.forms.controllers')
  .controller("formsCtrl", formsCtrl);

  formsCtrl.$inject = ["$scope", "$location", "$firebaseArray", "Global", "currentAuth"];

  /**
  * @namespace formsCtrl
  **/
  function formsCtrl($scope, $location, $firebaseArray, Global, currentAuth) {
    console.log("Forms Controller");
    console.log(currentAuth);
    $scope.newurl = "";
    this.ref = Global.ref;
    this.forms = Global.forms;

    this.ref = firebase.database().ref().child("users")
                      .child(currentAuth.uid);
    console.log("going to get ref");
    this.forms = $firebaseArray(this.ref);
    console.log(this.forms);

    $scope.addForm = function(){
      // form.funct1($scope.newurl).then(function(htm){
      //   this.forms.$add({
      //     url : $scope.newurl,
      //     html : htm.data
      //   }).then(function(ref) {
      //     $scope.goto(ref.key);
      //   });
      // });
      console.log("added");
    };
    $scope.goto = function(formid){
      $location.path( "/form/"+formid );
    }
  }

}());
