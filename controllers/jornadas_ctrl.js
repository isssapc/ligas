angular.module('LigasApp').controller('JornadasCtrl', ['$state', 'LigasApi', '$stateParams',
    function ($state, LigasApi, $stateParams) {
        var self = this;
        self.jornadas = [];       

        LigasApi.get_jornadas_liga_temporada($stateParams.id_liga, $stateParams.id_temporada).then(function (response) {
            self.jornadas = response.data;
        }).catch(function (response) {
            console.log("error al obtener los datos del lote");
        });











    }]);