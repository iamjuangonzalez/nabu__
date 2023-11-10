"use strict";

angular
  .module("extraccion_efectivoApp.resumen-cheque", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/resumen-cheque", {
        templateUrl: "/template.html",
        controller: "resumenChequeCtrl",
      });
    },
  ])

  .controller([
    "resumenChequeCtrl",
    function ($scope) {
      
    },
  ]);
