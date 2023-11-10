"use strict";

angular
  .module("myApp.home", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/home", {
        templateUrl: "main/home/home.html",
        controller: "HomeCtrl",
      });
    },
  ])

  .controller(["HomeCtrl", function () {}]);
