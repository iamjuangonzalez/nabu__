"use strict";

angular
  .module("extraccion_efectivoApp.info-transferencia", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/info-transferencia", {
        templateUrl: "/template.html",
        controller: "info_transfereciaCtrl",
      });
    },
  ])

  .controller(["info_transfereciaCtrl", function ($scope) {}]);
