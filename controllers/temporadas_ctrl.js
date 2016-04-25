angular.module('LigasApp').controller('TemporadasCtrl', ['$stateParams', 'LigasApi', function ($stateParams, LigasApi) {
        var self = this;
        self.temporadas = [];
           
        LigasApi.get_temporadas().then(function (response) {
            self.temporadas = response.data;
        });
        
    }]);