(function(){
    var config = {
            apiKey: "AIzaSyCJhESPCrF9Raleqw844UDdj9s0Bb5x-dQ",
            authDomain: "firepad-examples.firebaseapp.com",
            databaseURL: "https://firepad-examples.firebaseio.com",
            storageBucket: "firepad-examples.appspot.com",
            messagingSenderId: "389100237294"
          };
  
    firebase.initializeApp(config);

    var app = angular.module("aweform", ["firebase","ngMaterial"]);

    app.factory("Auth", ["$firebaseAuth",
        function($firebaseAuth) {
        return $firebaseAuth();
      }
    ]);
    
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
    
    
   
    




}());