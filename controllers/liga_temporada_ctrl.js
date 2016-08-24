angular.module('LigasApp').controller('LigaTemporadaCtrl', ['$stateParams', 'LigasApi', '$scope', function ($stateParams, LigasApi, $scope) {
        var self = this;
        self.equipos = [];
        self.jornadas = [];
        self.nuevo_equipo = {};

        self.pre_add_equipo = function () {
            $("#modalNuevoEquipo").modal("show");
        };

        self.add_equipo = function () {
            self.nuevo_equipo.id_liga=$stateParams.id_liga;
            LigasApi.add_equipo(self.nuevo_equipo).then(function (response) {
                self.equipos.push(response.data);
            }).catch(function (response) {
                console.log("error");
            }).finally(function (response) {
                $("#modalNuevoEquipo").modal("hide");
                $scope.formNuevoEquipo.$setPristine();
                $scope.formNuevoEquipo.$setUntouched();
                self.nuevo_equipo = {};

            });
        };





        LigasApi.get_equipos_liga_temporada($stateParams.id_liga, $stateParams.id_temporada).then(function (response) {
            self.equipos = response.data;
        });

        LigasApi.get_jornadas_liga_temporada($stateParams.id_liga, $stateParams.id_temporada).then(function (response) {
            self.jornadas = response.data;
        });

    }]);