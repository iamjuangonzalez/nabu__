"use strict";

angular
  .module("consulta_saldoApp.comprobante", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/comprobante", {
        templateUrl: "/template.html",
        controller: "ticketCtrl",
      });
    },
  ])

  .controller(["ticketCtrl", function ($scope) {}]);