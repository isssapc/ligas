angular.module('LigasApp').controller('LigaTemporadaCtrl', ['$stateParams', 'LigasApi', function ($stateParams, LigasApi) {
        var self = this;
        self.equipos = [];
        self.jornadas = [];

        LigasApi.get_equipos_liga_temporada($stateParams.id_liga, $stateParams.id_temporada).then(function (response) {
            self.equipos = response.data;
        });

        LigasApi.get_jornadas_liga_temporada($stateParams.id_liga, $stateParams.id_temporada).then(function (response) {
            self.jornadas = response.data;
        });

    }]);