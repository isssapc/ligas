angular.module('LigasApp').controller('EquipoCtrl', ['$state', 'LigasApi', '$stateParams',
    function ($state, LigasApi, $stateParams) {
        var self = this;
        self.jugadores = [];
        self.partidos = [];



        LigasApi.get_jugadores_equipo_liga($stateParams.id_equipo, $stateParams.id_liga).then(function (response) {
            self.jugadores = response.data;
        }).catch(function (response) {
            console.log("error al obtener los datos del lote");
        });

        LigasApi.get_partidos_equipo_liga($stateParams.id_equipo, $stateParams.id_liga).then(function (response) {
            self.partidos = response.data;
        }).catch(function (response) {
            console.log("error al obtener los datos del lote");
        });











    }]);