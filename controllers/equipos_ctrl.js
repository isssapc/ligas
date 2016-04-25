angular.module('LigasApp').controller('EquiposCtrl', ['$state', 'LigasApi', '$stateParams',
    function ($state, LigasApi, $stateParams) {
        var self = this;
        self.equipos = [];
    

        LigasApi.get_equipos().then(function (response) {
            self.equipos = response.data;
        }).catch(function (response) {
            console.log("error al obtener los datos del lote");
        });











    }]);