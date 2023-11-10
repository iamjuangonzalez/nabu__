"use strict";

angular
  .module("extraccion_efectivoApp.numero-cuenta", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/numero-cuenta", {
        templateUrl: "/template.html",
        controller: "numeroCtrl",
      });
    },
  ])

  .controller(["numeroCtrl", function ($scope) {}]);
