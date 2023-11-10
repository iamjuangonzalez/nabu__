"use strict";

angular
  .module("consulta_saldoApp.cuentas", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/cuentas", {
        templateUrl: "/template.html",
        controller: "cuentasCtrl",
      });
    },
  ])

  .controller(["cuentasCtrl", function ($scope) {}]);
