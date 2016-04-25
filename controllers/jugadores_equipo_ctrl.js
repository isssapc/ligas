angular.module('LigasApp').controller('JugadoresEquipoCtrl', ['$state', 'LigasApi', '$stateParams',
    function ($state, LigasApi, $stateParams) {
        var self = this;
        self.jugadores = [];



        LigasApi.get_jugadores_equipo_liga_temporada($stateParams.id_equipo, $stateParams.id_liga, $stateParams.id_temporada).then(function (response) {
            self.jugadores = response.data;
        }).catch(function (response) {
            console.log("error al obtener los datos del lote");
        });











    }]);