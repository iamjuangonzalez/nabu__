"use strict";

angular
  .module("extraccion_efectivoApp.transfiriendo", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/transfiriendo", {
        templateUrl: "/template.html",
        controller: "transfiriendoCtrl",
      });
    },
  ])

  .controller(["transfiriendoCtrl", function ($scope) {}]);