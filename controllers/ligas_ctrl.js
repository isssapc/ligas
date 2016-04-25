angular.module('LigasApp').controller('LigasCtrl', ['$state','LigasApi', function ($state,LigasApi) {
        var self = this;
        self.ligas=[];
              
              LigasApi.get_ligas().then(function(response){
                 self.ligas=response.data; 
              });

    }]);