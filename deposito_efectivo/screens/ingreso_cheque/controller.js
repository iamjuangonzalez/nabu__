"use strict";

angular
  .module("deposito_efectivoApp.ingreso-cheque", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/ingreso-cheque", {
        templateUrl: "/template.html",
        controller: "ingresoChequeCtrl",
      });
    },
  ])

  .controller(["ingresoChequeCtrl", function ($scope) {}]);
