(function () {
  "use strict";

  angular
  .module('app.form.controllers')
  .controller("formCtrl", formCtrl);

  formCtrl.$inject = ["$scope", "$location", "Form", "Global", "currentAuth", "$routeParams", "$firebaseObject"];


  /**
  * @namespace formCtrl
  **/
  function formCtrl($scope, $location, Form, Global, currentAuth, $routeParams, $firebaseObject) {
    var vm = this;
    Form.destroyData();
    var form = Form.getData(currentAuth, $routeParams.param);
    form.$bindTo($scope,"newForm");


  }

}());
