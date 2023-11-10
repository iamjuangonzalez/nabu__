"use strict";

angular
  .module("extraccion_efectivoApp.ingresar-cuenta", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/ingresar-cuenta", {
        templateUrl: "/template.html",
        controller: "ingresarCuentaCtrl",
      });
    },
  ])

  .controller(["ingresarCuentaCtrl", function ($scope) {}]);
