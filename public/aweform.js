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
    app.controller("formsController", ["$scope", "Auth",
        function($scope, Auth) {
            var self = this;
            self.a = "He;low wrld";
            console.log("Form Controller")
        }
                                 ]);
    
    
    

   

    
    
//---------------------------------------Form Controller    
    app.controller("formController", ["$scope", "Auth",
        function($scope, Auth) {
            console.log("Form Controller")
        }
                                 ]);
    
    
    

   

    



}());