"use strict";

var transferencia_cuentasApp = angular.module("transferencia_cuentasApp", [
  "ngRoute",
]);
transferencia_cuentasApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      // PANTALLA DE INICIO
      .when("/", {
        templateUrl: "/consulta_saldo/screens/inicio/template.html",
        controller: "inicioCtrl",
      })
      .when("/cuentas", {
        templateUrl: "/transferencia_cuentas/screens/cuentas/template.html",
        controller: "cuentasCtrl",
      })

      .when("/ingresar-cuenta", {
        templateUrl:
          "/transferencia_cuentas/screens/ingresar_cuenta/template.html",
        controller: "ingresarCuentaCtrl",
      })
      .when("/info-transferencia", {
        templateUrl:
          "/transferencia_cuentas/screens/info_transferencia/template.html",
        controller: "info_transfereciaCtrl",
      })
      .when("/transfiriendo", {
        templateUrl:
          "/transferencia_cuentas/screens/confirmacion_transferencia/template.html",
        controller: "transfiriendoCtrl",
      })

      .when("/transferencia-exitosa", {
        templateUrl:
          "/transferencia_cuentas/screens/transferencia_exitosa/template.html",
        controller: "transferenciaExitosaCtrl",
      })
      .when("/comprobante", {
        templateUrl: "/transferencia_cuentas/screens/ticket/template.html",
        controller: "ticketCtrl",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);

transferencia_cuentasApp.controller("inicioCtrl", function ($scope) {});
transferencia_cuentasApp.controller("cuentasCtrl", function ($scope) {
  $scope.setActive("mTransferencia_cuentas");
  $scope.fecha = new Date();
  $scope.accountBank = [
    {
      id: 1,
      name_bank: "BBVA",
      logo_bank: "../img/banks/bank1.png",
      accounts_bank: {
        accounts: [
          {
            id: 1,
            divisa: "₲ Guraníes",
            saldo_disponible: "₲ 94.148",
            type: "Corriente",
            number: "03 50 00 0083",
            operationes: [
              {
                date: "16/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -6.000.30",
                cash: "₲ -6.000.30",
              },
              {
                date: "12/03/2022",
                description: "Transferencia cta -8699",
                importe: "₲ 800.30",
                cash: "₲5.200.30",
              },
              {
                date: "14/03/2022",
                description: "Compra Netflix",
                importe: "₲ -8.000.30",
                cash: "₲ 8.000.30",
              },
              {
                date: "16/02/2022",
                description: "Compra Spotify",
                importe: "₲ -3.000.30",
                cash: "₲ 5.000.30",
              },
              {
                date: "01/05/2022",
                description: "Compra Disney",
                importe: "₲ 1.200.30",
                cash: "₲ -6.000.30",
              },
              {
                date: "19/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -7.500.30",
                cash: "₲ -6.000.30",
              },
            ],
          },
          {
            id: 2,
            divisa: "₲ Guraníes",
            type: "Ahorros",
            saldo_disponible: "₲ 94.148",
            number: "03 50 00 0066",
            operationes: [
              {
                date: "16/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -6.000.30",
                cash: "₲ -6.000.30",
              },
              {
                date: "12/03/2022",
                description: "Transferencia cta -8699",
                importe: "₲ 800.30",
                cash: "₲5.200.30",
              },
              {
                date: "14/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -8.000.30",
                cash: "₲ 8.000.30",
              },
              {
                date: "16/02/2022",
                description: "Compra Mercadopago",
                importe: "₲ -3.000.30",
                cash: "₲ 5.000.30",
              },
              {
                date: "01/05/2022",
                description: "Compra Mercadopago",
                importe: "₲ 1.200.30",
                cash: "₲ -6.000.30",
              },
              {
                date: "19/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -7.500.30",
                cash: "₲ -6.000.30",
              },
            ],
          },
          {
            id: 3,
            divisa: "$ Dolares",
            saldo_disponible: "₲ 94.148",
            type: "Corriente",
            number: "03 50 00 0084",
            operationes: [
              {
                date: "16/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -6.000.30",
                cash: "₲ -6.000.30",
              },
              {
                date: "12/03/2022",
                description: "Transferencia cta -8699",
                importe: "₲ 800.30",
                cash: "₲5.200.30",
              },
              {
                date: "14/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -8.000.30",
                cash: "₲ 8.000.30",
              },
              {
                date: "16/02/2022",
                description: "Compra Mercadopago",
                importe: "₲ -3.000.30",
                cash: "₲ 5.000.30",
              },
              {
                date: "01/05/2022",
                description: "Compra Mercadopago",
                importe: "₲ 1.200.30",
                cash: "₲ -6.000.30",
              },
              {
                date: "19/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -7.500.30",
                cash: "₲ -6.000.30",
              },
            ],
          },
          {
            id: 4,
            divisa: "$ Dolares",
            saldo_disponible: "₲ 94.148",
            type: "Ahorros",
            number: "03 50 00 0033",
            operationes: [
              {
                date: "16/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -6.000.30",
                cash: "₲ -6.000.30",
              },
              {
                date: "12/03/2022",
                description: "Transferencia cta -8699",
                importe: "₲ 800.30",
                cash: "₲5.200.30",
              },
              {
                date: "14/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -8.000.30",
                cash: "₲ 8.000.30",
              },
              {
                date: "16/02/2022",
                description: "Compra Mercadopago",
                importe: "₲ -3.000.30",
                cash: "₲ 5.000.30",
              },
              {
                date: "01/05/2022",
                description: "Compra Mercadopago",
                importe: "₲ 1.200.30",
                cash: "₲ -6.000.30",
              },
              {
                date: "19/03/2022",
                description: "Compra Mercadopago",
                importe: "₲ -7.500.30",
                cash: "₲ -6.000.30",
              },
            ],
          },
        ],
      },
    },
  ];
  $scope.imgBank = $scope.accountBank[0].logo_bank;
  $scope.cuentasBancarias = $scope.accountBank[0].accounts_bank.accounts;
});
transferencia_cuentasApp.controller("ingresarCuentaCtrl", function ($scope) {
  $scope.setActive("mTransferencia_cuentas");
});

transferencia_cuentasApp.controller("info_transfereciaCtrl", function ($scope) {
  $scope.setActive("mTransferencia_cuentas");
});
transferencia_cuentasApp.controller("transfiriendoCtrl", function ($scope) {
  $scope.setActive("mTransferencia_cuentas");
});
transferencia_cuentasApp.controller("transferenciaExitosaCtrl", function ($scope) {
  $scope.setActive("mTransferencia_cuentas");
});
transferencia_cuentasApp.controller("ticketCtrl", function ($scope) {
  $scope.setActive("mTransferencia_cuentas");
});

transferencia_cuentasApp.controller("operation-homeCtrl", [
  "$scope",
  function ($scope) {
    $scope.infoAccount = "consulta_saldo/shared/resumen-cuenta/template.html";
    $scope.menuSuperior = "shared/nav.html";
    $scope.menuInferior = "shared/footer.html";
    $scope.menuOperations = "consulta_saldo/shared/menu-operaciones.html";
    $scope.setActive = function (Opcion) {
      $scope.mTransferencia_cuentas = "";
      $scope[Opcion] = "active";
    };
  },
]);
