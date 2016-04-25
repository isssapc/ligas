angular.module('LigasApp').controller('TemporadasLigaCtrl', ['$stateParams', 'LigasApi', function ($stateParams, LigasApi) {
        var self = this;
        self.temporadas = [];
        self.temporada={};
       
        LigasApi.get_temporadas_liga($stateParams.id_liga).then(function (response) {
            self.temporadas = response.data;
        });
        
//        self.get_lotes=function(obra){
//          VentasApi.get_lotes_obra(obra.id_obra).then(function(response){
//             self.lotes= _.chain(response.data.manzanas).pluck('lotes').flatten().value(); 
//             //console.log(JSON.stringify(self.manzanas));
//             //console.log(self.manzanas);
//          });  
//        };
        
       



    }]);