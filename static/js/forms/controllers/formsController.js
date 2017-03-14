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
    vm.newUrl='';
    vm.googleformlink='.*docs.google.com/forms/d/e.*'

    vm.forms = Forms.getData(currentAuth);

    vm.addForm = function(){
      var path = vm.newUrl.match("https://docs.google.com(.*)")[1];
      Forms.addData(path).then(function(data){
        vm.goto(data.path.o[2]);
      });
    };
    vm.goto = function(formid){
      $location.path( "/form/"+formid );
    }
  }

}());
