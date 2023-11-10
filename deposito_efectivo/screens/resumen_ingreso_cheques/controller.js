"use strict";

angular
  .module("deposito_efectivoApp.resumen-ingreso-cheques", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/resumen-ingreso-cheques", {
        templateUrl: "/template.html",
        controller: "resumenIngresoChequeCtrl",
      });
    },
  ])

  .controller(["resumenIngresoChequeCtrl", function ($scope) {}]);
