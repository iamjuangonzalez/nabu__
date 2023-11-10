"use strict";

angular
  .module("consulta_saldoApp.detalles-cuenta", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/detalles-cuenta", {
        templateUrl: "/template.html",
        controller: "movimientosCtrl",
      });
    },
  ])

  .controller(["movimientosCtrl", function ($scope) {}]);