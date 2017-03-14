(function () {
  "use strict";

  angular
  .module('app.form.controllers')
  .controller("formCtrl", formCtrl);

  formCtrl.$inject = ["$scope", "$location", "Form", "Global", "currentAuth", "$routeParams"];


  /**
  * @namespace formCtrl
  **/
  function formCtrl($scope, $location, Form, Global, currentAuth, $routeParams) {
    var vm = this;
    vm.newForm=null;
    vm.form = Form.getData(currentAuth, $routeParams.param);

  }

}());
