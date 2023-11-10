"use strict";

angular
  .module("extraccion_efectivoApp.extraccion-exitosa", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/extraccion-exitosa", {
        templateUrl: "/template.html",
        controller: "extraccionExitosaCtrl",
      });
    },
  ])

  .controller(["extraccionExitosaCtrl", function ($scope) {}]);