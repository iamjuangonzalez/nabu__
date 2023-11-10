"use strict";

angular
  .module("deposito_efectivoApp.tipo-envio", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/tipo-envio", {
        templateUrl: "/template.html",
        controller: "tipoCtrl",
      });
    },
  ])

  .controller([
    "tipoCtrl",
    function ($scope) {
      
    },
  ]);
