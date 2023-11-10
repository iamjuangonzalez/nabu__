"use strict";

angular
  .module("extraccion_efectivoApp.cuentas", ["ngRoute"])

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
