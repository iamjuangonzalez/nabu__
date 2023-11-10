"use strict";

angular
  .module("deposito_efectivoApp.resumen-ingreso", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/resumen-ingreso", {
        templateUrl: "/template.html",
        controller: "resumenCtrl",
      });
    },
  ])

  .controller(["resumenCtrl", function ($scope) {}]);
