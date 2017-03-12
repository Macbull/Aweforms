(function () {
  "use strict";

  angular
  .module('app.forms.controllers')
  .controller("formsCtrl", formsCtrl);

  formsCtrl.$inject = ["$scope", "$location", "Forms", "Global", "currentAuth"];


  /**
  * @namespace formsCtrl
  **/
  function formsCtrl($scope, $location, Forms, Global, currentAuth) {
    var vm = this;
    vm.newForm=null;

    vm.forms = Forms.getData(currentAuth);

    $scope.addForm = function(){
      // validate link
      // get a promise from add, and redirect to the form/$id
      Forms.addData(vm.newForm);
    };
    $scope.goto = function(formid){
      $location.path( "/form/"+formid );
    }
  }

}());
