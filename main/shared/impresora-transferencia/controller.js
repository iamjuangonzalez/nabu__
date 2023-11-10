"use strict";

angular
  .module("operationApp.impresora", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/comprobante-impresora", {
        templateUrl: "/template.html",
        controller: "operations-impresoraCtrl",
      });
    },
  ])

  .controller(["operations-impresoraCtrl", function ($scope) {}]);
