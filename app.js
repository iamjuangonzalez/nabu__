"use strict";

angular
  .module("myApp", ["ngRoute", "mainApp"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .otherwise({
          redirectTo: "/inicio",
        });
    },
  ])

  .controller("headCtrl", [
    "$scope",
    function ($scope) {
      $scope.menuSuperior = "shared/nav.html";
      $scope.menuInferior = "shared/footer.html";
    },
  ])
  
