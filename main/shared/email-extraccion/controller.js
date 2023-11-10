"use strict";

angular
  .module("operationApp.email", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/comprobante-email", {
          templateUrl: "/template.html",
          controller: "emailCtrl",
        })
    },
  ])

  .controller(["emailCtrl", function ($scope) {}])
