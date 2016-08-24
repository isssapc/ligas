angular.module('LigasApp').controller('LigaCtrl', ['$stateParams', 'LigasApi', function ($stateParams, LigasApi) {
        var self = this;
        self.equipos = [];
        self.jornadas = [];
        self.temporadas = [];


        LigasApi.get_temporadas_liga($stateParams.id_liga).then(function (response) {
            self.temporadas = response.data;
        });

       

    }]);