"use strict";

angular
  .module("deposito_efectivoApp.confirmacion-deposito", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/confirmacion-deposito", {
        templateUrl: "/template.html",
        controller: "confirmacionCtrl",
      });
    },
  ])

  .controller(["confirmacionCtrl", function ($scope) {}]);