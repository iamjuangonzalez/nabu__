"use strict";

var depositosApp = angular.module("depositosApp", ["ngRoute"]);
depositosApp.config([
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
        templateUrl: "/deposito_efectivo/screens/cuentas/template.html",
        controller: "cuentasCtrl",
      })
      // VISTA DE SELECCION DEL TIPO DE DEPOSITO
      .when("/tipo-envio", {
        templateUrl: "/deposito_efectivo/screens/tipo_envio/template.html",
        controller: "tipoCtrl",
      })
      //INGRESA EL NUMERO DE CUENTA PARA REALIZAR EL ENVIO
      .when("/numero-cuenta", {
        templateUrl: "/deposito_efectivo/screens/numero_cuenta/template.html",
        controller: "numeroCtrl",
      })
      // VISTA QUE MUESTRA LA INFORMACION DEL ENVIO
      .when("/info-envio", {
        templateUrl: "/deposito_efectivo/screens/info_envio/template.html",
        controller: "infoCtrl",
      })

      //VISTA QUE MUESTRA EL CONTEO DE LOS BILLETES
      .when("/ingreso-billetes", {
        templateUrl:
          "/deposito_efectivo/screens/ingreso_deposito/template.html",
        controller: "ingresoEfectivoCtrl",
      })
      //VISTA QUE MUESTRA EL TOTAL DE INGRESO DE BILLETES
      .when("/ingreso-cheque", {
        templateUrl: "/deposito_efectivo/screens/ingreso_cheque/template.html",
        controller: "ingresoChequeCtrl",
      })
      .when("/resumen-cheque", {
        templateUrl: "/deposito_efectivo/screens/resumen_cheque/template.html",
        controller: "resumenChequeCtrl",
      })
      .when("/resumen-ingreso", {
        templateUrl: "/deposito_efectivo/screens/resumen_ingreso/template.html",
        controller: "resumenCtrl",
      })
      .when("/resumen-ingreso-cheques", {
        templateUrl:
          "/deposito_efectivo/screens/resumen_ingreso_cheques/template.html",
        controller: "resumenIngresoChequeCtrl",
      })
      .when("/confirmacion-deposito", {
        templateUrl:
          "/deposito_efectivo/screens/confirmacion_deposito/template.html",
        controller: "confirmacionCtrl",
      })
      .when("/ticket", {
        templateUrl: "/deposito_efectivo/screens/ticket/template.html",
        controller: "ticketCtrl",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);

depositosApp.controller("inicioCtrl", function ($scope) {});
depositosApp.controller("cuentasCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
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
depositosApp.controller("tipoCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
});

depositosApp.controller("confirmacionCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
});
depositosApp.controller("infoCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
  $scope.type = false;
  $scope.cambiar_a_cheque = function () {
    $scope.type = true;
  };
});
depositosApp.controller("ingresoEfectivoCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");

  $scope.ingresando = false;
  $scope.cambiar_valor = function () {
    $scope.ingresando = true;
  };
});
depositosApp.controller("ingresoChequeCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");

  $scope.cheque = false;
  $scope.cambiar_valor = function () {
    $scope.cheque = true;
  };
});
depositosApp.controller("resumenCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
  $scope.detail_billetes = [
    {
      cantidad: 20,
      billete: 5,
    },
    {
      cantidad: 2,
      billete: 50,
    },
    {
      cantidad: 3,
      billete: 500,
    },
    {
      cantidad: 55,
      billete: 1000,
    },
  ];
});
depositosApp.controller("resumenIngresoChequeCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
  $scope.resumen_ingreso_cheques = [
    {
      cheque: 4000000,
    },
    {
      cheque: 3000000,
    },
    {
      cheque: 5000000,
    },
    {
      cheque: 4000000,
    },
    {
      cheque: 7000000,
    },
    {
      cheque: 4450000,
    },
    {
      cheque: 4578900,
    },
    {
      cheque: 4000000,
    },
  ];
});
depositosApp.controller("ticketCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
});
depositosApp.controller("numeroCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
});
depositosApp.controller("numeroCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
});
depositosApp.controller("resumenChequeCtrl", function ($scope) {
  $scope.setActive("mDepositoEfectivo");
});

depositosApp.controller("operation-homeCtrl", [
  "$scope",
  function ($scope) {
    $scope.infoAccount = "consulta_saldo/shared/resumen-cuenta/template.html";
    $scope.fecha = new Date();
    $scope.menuSuperior = "shared/nav.html";
    $scope.menuInferior = "shared/footer.html";
    $scope.menuOperations = "consulta_saldo/shared/menu-operaciones.html";
    $scope.setActive = function (Opcion) {
      $scope.mDepositoEfectivo = "";
      $scope[Opcion] = "active";
    };
  },
]);
