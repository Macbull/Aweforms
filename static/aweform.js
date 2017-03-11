// ************DeadKittens

//---------------------------------------Factory for Global variables
  app.factory('Global', function() {
    return {
      url:null,
      forms:null,
      ref:null}
    // return {
    //   _url:funtion(){
    //     return url;
    //   },
    //   _forms:funtion(){
    //     return forms;
    //   },
    //   _ref:function(){
    //     return ref;
    //   }
    // };
  });




//---------------------------------------Factory for calling Form from proxy
app.factory("form", ["$http",
function($http) {
  return {
    funct1:function(url){
      return $http({
        method: 'GET',
        url: '/proxy/'+url
      });
    }
  }
}]);



//---------------------------------------Forms Controller
app.controller("formsController", ["$scope", "$location", "$firebaseArray", "form", "Global", "currentAuth",
function($scope, $location, $firebaseArray, form, Global, currentAuth) {
  console.log("Forms Controller");
  console.log(currentAuth);
  $scope.newurl = "";
  this.ref = Global.vars.ref;
  this.forms = Global.vars.forms;

  this.ref = firebase.database().ref().child("users")
                    .child(currentAuth.uid);
  console.log("going to get ref");
  this.forms = $firebaseArray(this.ref);
  console.log(this.forms);

  $scope.addForm = function(){
    form.funct1($scope.newurl).then(function(htm){
      this.forms.$add({
        url : $scope.newurl,
        html : htm.data
      }).then(function(ref) {
        $scope.goto(ref.key);
      });
    });
  };
  $scope.goto = function(formid){
    $location.path( "/form/"+formid );
  }
}
]);
//---------------------------------------Form Controller
app.controller("formController", ["$scope","$routeParams","form", "currentAuth", "Global",
function($scope, $routeParams, form, currentAuth, Global) {
  console.log(currentAuth);
  this.url = Global.vars.url;
  this.url="not none";
  document.getElementById('iframeID').onload = function() {
    console.log("loaded");
    var iframe = document.getElementById('iframeID').contentWindow.document.body.children;
    console.log(iframe);
  }
}
]);
}());
