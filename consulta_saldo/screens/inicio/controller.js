"use strict";

angular
  .module("consulta_saldoApp.inicio", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/inicio", {
        templateUrl: "consulta_saldo/inicio/template.html",
        controller: "inicioCtrl",
      });
    },
  ])

  .controller(["inicioCtrl", function () {}]);
