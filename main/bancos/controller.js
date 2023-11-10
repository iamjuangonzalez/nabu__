"use strict";

angular
  .module("banksApp")

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/lista-bancos", {
          templateUrl: "main/list-banks/list-banks.html",
          controller: "BanksCtrl",
        })
    },
  ])

  .controller("BanksCtrl", [function ($scope) {}]);
