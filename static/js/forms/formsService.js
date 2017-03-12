(function () {
  'use strict';

  angular
  .module('app.forms.services')
  .factory("Forms", Forms);

  Forms.$inject = ["$firebaseArray"];

  function Forms($firebaseArray) {
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
