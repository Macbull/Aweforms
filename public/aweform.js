(function(){
//---------------------------------------Firebase Config
    var config = {
            apiKey: "AIzaSyCJhESPCrF9Raleqw844UDdj9s0Bb5x-dQ",
            authDomain: "firepad-examples.firebaseapp.com",
            databaseURL: "https://firepad-examples.firebaseio.com",
            storageBucket: "firepad-examples.appspot.com",
            messagingSenderId: "389100237294"
          };
  
//---------------------------------------Firebase and Angular app initialization
    firebase.initializeApp(config);
    var app = angular.module("aweform", ["firebase","ngMaterial","ngRoute"]);

//---------------------------------------Ng-Routes
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
          templateUrl: '/forms.html',
          controller: 'formsController',
          controllerAs: 'ctrl'
        })
        .when('/login',{
          templateUrl: '/login.html'
        })
        .when('/form/:param',{
          templateUrl: '/form.html',
          controller: 'formController',
          controllerAs: 'ctrl'
        })
        .otherwise('/');
    }]);
    
    
//---------------------------------------Factory for authentication
    app.factory("Auth", ["$firebaseAuth",
        function($firebaseAuth) {
        return $firebaseAuth();
      }
    ]);
    
    
    
//---------------------------------------Factory for calling Form from proxy
    app.factory("form", ["$http",
        function($http) {
            return {
                funct1:function(url){
                    return $http({
                      method: 'GET',
                      url: 'http://127.0.0.1:5001/'+url
                    });
                }
            }
        }]);
    
    
    
    
    
//---------------------------------------Login Controller    
    app.controller("SampleCtrl", ["$scope", "Auth",
        function($scope, Auth) {
            $scope.auth = Auth;
            $scope.signIn = function() {
                $scope.auth.$signInWithPopup("google").then(function(firebaseUser) {
                    console.log("Signed in as:", firebaseUser);
                }).catch(function(error) {
                    console.log("Authentication failed:", error);
                });
            };
            $scope.signOut = function() {
                $scope.auth.$signOut();
            };
    // any time auth state changes, add the user data to scope
            $scope.auth.$onAuthStateChanged(function(firebaseUser) {
                $scope.firebaseUser = firebaseUser;
            });
        }
                                 ]);
    
    

    
//---------------------------------------Forms Controller    
    app.controller("formsController", ["$scope", "Auth","$location", "$firebaseArray", "form",
        function($scope, Auth, $location, $firebaseArray, form) {
            console.log("Forms Controller");
            console.log(firebase.auth().currentUser.uid);
            $scope.newurl = "";
            var ref = firebase.database().ref().child("users").child(firebase.auth().currentUser.uid);
            $scope.forms = $firebaseArray(ref);
            console.log($scope.forms);
            $scope.addForm = function(){
                form.funct1($scope.newurl).then(function(htm){
                    $scope.forms.$add({
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
    app.controller("formController", ["$scope", "Auth","$routeParams","form",
        function($scope, Auth, $routeParams, form) {
            var res = form.funct1('https://docs.google.com/forms/d/e/1FAIpQLSc3kpBw4nMA09iSG6pd_v93qo_vlt6iFPnwpfyFL_v-53harw/viewform?usp=sf_link#response=ACYDBNgdte8JqpsHqIZ8gOryObpeEZMaystZt5r2Wc-qNYNYw99SsXC_jMbkZg');
            console.log(res);
        }
                                 ]);
    
    
    

   

    



}());