"use strict";

angular
  .module("deposito_efectivoApp.ingreso-billetes", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/ingreso-billetes", {
        templateUrl: "/template.html",
        controller: "ingresoEfectivoCtrl",
      });
    },
  ])

  .controller(["ingresoEfectivoCtrl", function ($scope) {}]);