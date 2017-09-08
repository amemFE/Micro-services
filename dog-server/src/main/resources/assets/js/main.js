/**
 * AngularJS web app
 * @author Hasra Harithaki
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('app', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // else 404
    .when('/error', {templateUrl: "partials/404.html", controller: "PageCtrl"})
    .otherwise({redirectTo: '/error'});
}]);

/**
 * Controls all Pages
 */
app.controller('PageCtrl', function ($scope, $http) {
  $scope.advertisement = "";

  $http({method: 'GET', url: '/api/v1/advertisements'})
    .then(function (response) {
      $scope.advertisement = response.data;
    }, function (error) {
      console.log("error");
    });

});