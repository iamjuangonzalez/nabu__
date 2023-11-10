"use strict";

angular
  .module("extraccion_efectivoApp.comprobante", ["ngRoute"])

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