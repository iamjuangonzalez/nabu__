"use strict";

angular
  .module("deposito_efectivoApp.info-envio", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/info-envio", {
        templateUrl: "/template.html",
        controller: "infoCtrl",
      });
    },
  ])

  .controller([
    "infoCtrl",
    function ($scope) {
      
    },
  ]);
