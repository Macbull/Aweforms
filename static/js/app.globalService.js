
(function () {
  'use strict';

  angular
  .module('app.global',[])
  .factory("Global", Global);

  function Global() {
    return  {
      url:null,
      forms:null,
      ref:null
    };
  }

})();
