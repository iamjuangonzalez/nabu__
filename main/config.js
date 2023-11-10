"use strict";

var mainApp = angular.module("mainApp", ["ngRoute"]);
mainApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/inicio", {
        templateUrl: "/main/home/template.html",
        controller: "inicioCtrl",
      })
      .when("/consultar-dni", {
        templateUrl: "/main/consultar-dni/template.html",
        controller: "consultaCtrl",
      })
      .when("/listar-bancos", {
        templateUrl: "/main/bancos/template.html",
        controller: "bancosCtrl",
      })
      .when("/verificacion-huella-consulta", {
        templateUrl: "main/shared/verificacion-consulta/template.html",
        controller: "verificacionConsultaCtrl",
      })
      .when("/verificacion-huella-deposito", {
        templateUrl: "main/shared/verificacion-deposito/template.html",
        controller: "verificacionDepositoCtrl",
      })
      .when("/verificacion-huella-extraccion", {
        templateUrl: "main/shared/verificacion-extraccion/template.html",
        controller: "verificacionExtraccionCtrl",
      })
      .when("/verificacion-huella-transferencia", {
        templateUrl: "main/shared/verificacion-transferencia/template.html",
        controller: "verificacionTransferenciaCtrl",
      })
      .when("/comprobante-email-consulta", {
        templateUrl: "/main/shared/email-consulta/template.html",
        controller: "emailConsultaCtrl",
      })
      .when("/comprobante-impresora-consulta", {
        templateUrl: "/main/shared/impresora-consulta/template.html",
        controller: "impresoraConsultaCtrl",
      })
      .when("/comprobante-email-extraccion", {
        templateUrl: "/main/shared/email-extraccion/template.html",
        controller: "emailExtraccionCtrl",
      })
      .when("/comprobante-impresora-extraccion", {
        templateUrl: "/main/shared/impresora-extraccion/template.html",
        controller: "impresoraExtraccionCtrl",
      })
      .when("/comprobante-email-transferencia", {
        templateUrl: "/main/shared/email-transferencia/template.html",
        controller: "emailTransferenciaCtrl",
      })
      .when("/comprobante-impresora-transferencia", {
        templateUrl: "/main/shared/impresora-transferencia/template.html",
        controller: "impresoraTransferenciaCtrl",
      })
      .when("/comprobante-email-deposito", {
        templateUrl: "/main/shared/email-deposito/template.html",
        controller: "emailDepositoCtrl",
      })
      .when("/comprobante-impresora-deposito", {
        templateUrl: "/main/shared/impresora-deposito/template.html",
        controller: "impresoraDepositoCtrl",
      })
      .otherwise({
        redirectTo: "/inicio",
      });
  },
]);

mainApp.controller("inicioCtrl", function ($scope) {});
mainApp.controller("consultaCtrl", function ($scope) {});
mainApp.controller("bancosCtrl", function ($scope) {
  $scope.listaBanks = [
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
    {
      id: 2,
      name_bank: "SANTANDER",
      logo_bank: "../img/banks/bank2.png",
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
    {
      id: 3,
      name_bank: "ITAÚ",
      logo_bank: "../img/banks/bank3.png",
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
    {
      id: 4,
      name_bank: "CITIBANK",
      logo_bank: "../img/banks/bank4.png",
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
    {
      id: 5,
      name_bank: "SANTANDER",
      logo_bank: "../img/banks/bank5.png",
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
    {
      id: 6,
      name_bank: "BANCO BASA",
      logo_bank: "../img/banks/bank6.png",
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
    {
      id: 7,
      name_bank: "BANCO BASA",
      logo_bank: "../img/banks/bank7.png",
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
    {
      id: 8,
      name_bank: "BANCO BASA",
      logo_bank: "../img/banks/bank8.png",
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
  console.log($scope.listaBanks);
});
mainApp.controller("verificacionConsultaCtrl", function ($scope) {});
mainApp.controller("verificacionDepositoCtrl", function ($scope) {});
mainApp.controller("verificacionExtraccionCtrl", function ($scope) {});
mainApp.controller("verificacionTransferenciaCtrl", function ($scope) {});
mainApp.controller("emailConsultaCtrl", function ($scope) {});
mainApp.controller("emailExtraccionCtrl", function ($scope) {});
mainApp.controller("emailTransferenciaCtrl", function ($scope) {});
mainApp.controller("emailDepositoCtrl", function ($scope) {});
mainApp.controller("impresoraConsultaCtrl", function ($scope) {});
mainApp.controller("impresoraExtraccionCtrl", function ($scope) {});
mainApp.controller("impresoraTransferenciaCtrl", function ($scope) {});
mainApp.controller("impresoraDepositoCtrl", function ($scope) {});
