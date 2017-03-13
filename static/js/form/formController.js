(function () {
  "use strict";

  angular
  .module('app.form.controllers')
  .controller("formCtrl", formCtrl);

  formCtrl.$inject = ["$scope", "$location", "Form", "Global", "currentAuth"];


  /**
  * @namespace formCtrl
  **/
  function formCtrl($scope, $location, Form, Global, currentAuth) {
    var vm = this;
    vm.newForm=null;

    vm.form = Form.getData(currentAuth);

    $scope.addForm = function(){
      // validate link
      // get a promise from add, and redirect to the form/$id
      Form.addData(vm.newForm);
    };
    $scope.goto = function(formid){
      $location.path( "/form/"+formid );
    }
  }

}());
