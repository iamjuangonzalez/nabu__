"use strict";

angular
  .module("operationApp.comprobante-email-consulta", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/comprobante-email-consulta", {
          templateUrl: "/template.html",
          controller: "emailConsultaCtrl",
        })
    },
  ])

  .controller(["emailConsultaCtrl", function ($scope) {}])
