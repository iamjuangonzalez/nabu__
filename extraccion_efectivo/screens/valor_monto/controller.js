"use strict";

angular
  .module("extraccion_efectivoApp.monto-enviar", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/monto-enviar", {
        templateUrl: "/template.html",
        controller: "montoCtrl",
      });
    },
  ])

  .controller([
    "montoCtrl",
    function ($scope) {
      
    },
  ]);
