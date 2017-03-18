(function () {
  "use strict";

  angular
  .module('app.form.controllers')
  .controller("formCtrl", formCtrl);

  formCtrl.$inject = ["$scope", "$compile", "$location", "Form", "Global", "currentAuth", "$routeParams", "$firebaseObject"];


  /**
  * @namespace formCtrl
  **/
  function formCtrl($scope, $compile, $location, Form, Global, currentAuth, $routeParams, $firebaseObject) {
    var vm = this;
    Form.destroyData();
    var form = Form.getData(currentAuth, $routeParams.param);
    form.$bindTo($scope,"newForm");
    var iframeDoc;
    document.getElementById("iframeID").onload = function(){
      // Document of iframe
      iframeDoc = this.contentWindow.document;

      // Setting name and thumbnailURL of the form
      $scope.newForm.name = iframeDoc.getElementsByClassName('freebirdFormviewerViewHeaderTitle')[0].innerText;
      $scope.newForm.image = Form.getImageUrl(iframeDoc.querySelector('[property="og:image"]').getAttribute('content'));

      // Get Form Element from iframe Document
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
