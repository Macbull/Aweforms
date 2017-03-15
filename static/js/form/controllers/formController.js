(function () {
  "use strict";

  angular
  .module('app.form.controllers')
  .controller("formCtrl", formCtrl);

  formCtrl.$inject = ["$scope", "$compile", "$location", "Form", "Global", "currentAuth", "$routeParams", "$firebaseObject","Thumb"];


  /**
  * @namespace formCtrl
  **/
  function formCtrl($scope, $compile, $location, Form, Global, currentAuth, $routeParams, $firebaseObject, Thumb) {
    var vm = this;
    Form.destroyData();
    var form = Form.getData(currentAuth, $routeParams.param);
    form.$bindTo($scope,"newForm");
    var iframeDoc;
    document.getElementById("iframeID").onload = function(){
      iframeDoc = this.contentWindow.document;
      $scope.newForm.name = iframeDoc.getElementsByClassName('freebirdFormviewerViewHeaderTitle')[0].innerText;
      var iframeForm = iframeDoc.getElementsByTagName('form');
      var iframeInputs = iframeDoc.getElementsByClassName("quantumWizTextinputPaperinputInput");

// Test adding ng-model on first element
      var mo = 'newForm.'+iframeInputs[0].getAttribute('jsname');
      console.log(iframeForm[0]);
      iframeInputs[0].setAttribute('ng-model',mo);
      iframeInputs[0].setAttribute('ng-model-options','{ allowInvalid: true }');
      $compile(iframeInputs[0])($scope);
    }



  }

}());
