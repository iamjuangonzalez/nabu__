"use strict";

angular
  .module("deposito_efectivoApp.transferencia-exitosa", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/transferencia-exitosa", {
        templateUrl: "/template.html",
        controller: "transferenciaExitosaCtrl",
      });
    },
  ])

  .controller(["transferenciaExitosaCtrl", function ($scope) {}]);