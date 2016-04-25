angular.module('LigasApp').controller('JugadoresCtrl', ['$state', 'LigasApi', '$stateParams',
    function ($state, LigasApi, $stateParams) {
        var self = this;
        self.jugadores = [];



        LigasApi.get_jugadores().then(function (response) {
            self.jugadores = response.data;
        }).catch(function (response) {
            console.log("error al obtener los datos del lote");
        });











    }]);