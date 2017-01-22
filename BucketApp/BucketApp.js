var app = angular.module('AngularUIBucketApp', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui",
    "firebase"
]);

app.controller('MainController', ['$scope','$firebaseSimpleLogin','$location',
    function($scope,$firebaseSimpleLogin,$location) {

	$scope.pay = function() {
    $location.path('/userPay');       // redirect to home page after logout

}

    }
]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: "signIn.html"
    });
    $routeProvider.when('/userHome', {
    templateUrl: 'userHome.html'
});
    $routeProvider.when('/userPay', {
    templateUrl: 'userPay.html'
    });
});
