angular.module('LigasApp').controller('EquiposTemporadaCtrl', ['$state', 'LigasApi', '$stateParams',
    function ($state, LigasApi, $stateParams) {
        var self = this;
        self.equipos = [];

        console.log("liga", $stateParams.id_liga);
        console.log("temporada", $stateParams.id_temporada);

        LigasApi.get_equipos_liga_temporada($stateParams.id_liga, $stateParams.id_temporada).then(function (response) {
            self.equipos = response.data;
        }).catch(function (response) {
            console.log("error al obtener los datos del lote");
        });











    }]);