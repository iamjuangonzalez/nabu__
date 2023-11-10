"use strict";

angular
  .module("dniApp.consult-dni", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/consultar-dni", {
        templateUrl: "main/consultar-dni.html",
        controller: "DniCtrl",
      });
    },
  ])

  .controller("DniCtrl", [function () {}]);
