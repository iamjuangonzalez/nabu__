"use strict";

var consulta_saldoApp = angular.module("consulta_saldoApp", ["ngRoute"]);
consulta_saldoApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      // PANTALLA DE INICIO
      .when("/", {
        templateUrl: "/consulta_saldo/screens/inicio/template.html",
        controller: "inicioCtrl",
      })
      // CUENTAS ASOCIADAS AL BANCO
      .when("/cuentas", {
        templateUrl: "/consulta_saldo/screens/cuentas/template.html",
        controller: "cuentasCtrl",
      })
      // DETALLES DE LA CUENTA COMO LO SON LOS MOVIMIENTOS
      .when("/detalles-cuenta", {
        templateUrl: "/consulta_saldo/screens/movimientos_cuenta/template.html",
        controller: "movimientosCtrl",
      })
      // GENERAR EL COMPROBANTE DEL MOVIMIENTO DE LA CUENTA
      .when("/comprobante", {
        templateUrl: "/consulta_saldo/screens/ticket/template.html",
        controller: "ticketCtrl",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);

consulta_saldoApp.controller("inicioCtrl", function ($scope) {});
consulta_saldoApp.controller("movimientosCtrl", function ($scope) {
  $scope.setActive("mConsultaSaldo");
  $scope.movimientos_cuenta = [
    {
      date: "16/03/2022",
      description: "Compra Mercadopago",
      importe: "₲ -6.000.30",
      cash: "₲ -6.000.30",
    },
    {
      date: "12/03/2022",
      description: "Transferencia cta -869912312312",
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
    /*
    {
      date: "19/03/2022",
      description: "Compra Ebay",
      importe: "₲ -7.500.30",
      cash: "₲ -6.000.30",
    },
    {
      date: "19/03/2022",
      description: "Compra Xbox Game Pass",
      importe: "₲ -7.500.30",
      cash: "₲ -6.000.30",
    }, */
  ];
});
consulta_saldoApp.controller("cuentasCtrl", function ($scope) {
  $scope.setActive("mConsultaSaldo");
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
  console.log($scope.fecha);
});

consulta_saldoApp.controller("ticketCtrl", function ($scope) {
  $scope.setActive("mConsultaSaldo");
});

consulta_saldoApp.controller("operation-homeCtrl", [
  "$scope",
  function ($scope) {
    $scope.infoAccount = "consulta_saldo/shared/resumen-cuenta/template.html";
    $scope.fecha = new Date();
    $scope.menuSuperior = "shared/nav.html";
    $scope.menuInferior = "shared/footer.html";
    $scope.menuOperations = "consulta_saldo/shared/menu-operaciones.html";
    $scope.setActive = function (Opcion) {
      $scope.mConsultaSaldo = "";
      $scope[Opcion] = "active";
    };
  },
]);
