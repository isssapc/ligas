angular.module('LigasApp').controller('PartidosCtrl', ['$state', 'LigasApi', '$stateParams',
    function ($state, LigasApi, $stateParams) {
        var self = this;
        self.partidos = [];

//        LigasApi.get_partidos_jornada($stateParams.id_jornada).then(function (response) {
//            self.partidos = response.data;
//        }).catch(function (response) {
//            console.log("error al obtener los datos del lote");
//        });


        LigasApi.get_partidos().then(function (response) {
            self.partidos = response.data;
        }).catch(function (response) {
            console.log("error al obtener los datos del lote");
        });










    }]);