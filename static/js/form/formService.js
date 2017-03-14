(function () {
  'use strict';

  angular
  .module('app.form.services')
  .factory("Form", Form);

  Form.$inject = ["$firebaseObject"];

  function Form($firebaseObject) {
    var data=null;
    var ref=null;

    var service = {
      getData: getData,
      destroyData: destroyData,
      addData: addData
    };
    return service;

    function getData(currentAuth, formid){
      if (!data)
      {
        ref = firebase.database().ref().child("users").child(currentAuth.uid).child(formid);
        data = $firebaseObject(ref);
      }
      return data;
    }

    function destroyData(){
      if (data){
        data.$destroy();
        data = null;
        ref = null;
      }
    }

    function addData(newData){
      // add data
    }

  }


})();
