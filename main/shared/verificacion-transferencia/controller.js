"use strict";

angular
  .module("operationApp.verificacion", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/verificacion-huella", {
        templateUrl: "/template.html",
        controller: "verificacionCtrl",
      });
    },
  ])

  .controller(["verificacionCtrl", function ($scope) {}]);
