"use strict";

angular
  .module("extraccion_efectivoApp.confirmacion-extraccion", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/confirmacion-extraccion", {
        templateUrl: "/template.html",
        controller: "confirmacionCtrl",
      });
    },
  ])

  .controller(["confirmacionCtrl", function ($scope) {}]);