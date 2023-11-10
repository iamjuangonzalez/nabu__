"use strict";

angular
  .module("deposito_efectivoApp.ticket", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/ticket", {
        templateUrl: "/template.html",
        controller: "ticketCtrl",
      });
    },
  ])

  .controller(["ticketCtrl", function ($scope) {}]);