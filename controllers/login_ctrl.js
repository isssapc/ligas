angular.module('LigasApp').controller('LoginCtrl', ['$state','VentasApi', function ($state,VentasApi) {
        var self = this;
        
        self.login=function(){
          $state.go('desarrollos');  
        };
       

    }]);