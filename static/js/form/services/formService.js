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

      addData: addData,
      destroyData: destroyData
    };
    return service;

    function getData(currentAuth, formid){
      ref = firebase.database().ref().child("users").child(currentAuth.uid).child(formid);
      data = $firebaseObject(ref);
      return data;
    }



    function addData(newData){
      // add data
    }

    function destroyData(){
      if (data){
        data.$destroy();
        data = null;
        ref = null;
      }
    }
  }


})();
