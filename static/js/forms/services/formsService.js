(function () {
  'use strict';

  angular
  .module('app.forms.services')
  .factory("Forms", Forms);

  Forms.$inject = ["$firebaseArray"];

  function Forms($firebaseArray) {
    var data=null;
    var ref=null;
    var service = {
      getData: getData,
      destroyData: destroyData,
      addData: addData
    };
    return service;

    function getData(currentAuth){
      if (!data)
      {
        ref = firebase.database().ref().child("users").child(currentAuth.uid);
        data = $firebaseArray(ref);
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
      return data.$add({
        url : newData,
        image : 'formThumbnails/placeholder.png'
      })
    }

  }


})();
