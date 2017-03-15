(function () {
  'use strict';

  angular
  .module('app.form.services')
  .factory("Thumb", Thumb);

  Thumb.$inject = ["$firebaseStorage"];

  function Thumb($firebaseStorage) {
    var service = {
      addImage: addImage
    };
    return service;

    function addImage(image, currentAuth, name){
      var id = name.match("viewform#response=(.*)")[1];
      var path = 'formThumbnails/'+name;
      var ref = firebase.storage().ref(path);
      var data = $firebaseStorage(ref);
      var uploadTask = data.$put(dataURItoBlob(image),{ user :user});

    }



  }

})();
