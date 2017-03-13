(function () {
  'use strict';

  angular
  .module('app.form.services')
  .factory("Form", Form);

  Form.$inject = ["$firebaseArray"];

  function Form($firebaseArray) {
    var data=null;

    var service = {
      getData: getData,
      destroyData: destroyData,
      addData: addData
    };
    return service;

    function getData(currentAuth){
      if (!data)
      {
        var ref = firebase.database().ref().child("users").child(currentAuth.uid);
        data = $firebaseArray(ref);
      }
      return data;
    }

    function destroyData(){
      if (data){
        data.$destroy();
        data = null;
      }
    }

    function addData(newData){
      // add data
    }

  }


})();
