'use strict';
var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function ($window) {
        return $window._;
    }]);
var app = angular.module('LigasApp', ['ui.router', 'smart-table', 'underscore', 'myApp.version']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('home', {
                    url: '/'

                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl as ctrl'
                })
                .state('lote', {
                    url: '/lote/:id_lote',
                    templateUrl: 'templates/lote.html',
                    controller: 'LoteCtrl as ctrl',
                    resolve: {
                        tipos: function (VentasApi) {
                            return VentasApi.get_tipos_pago();
                        },
                        formas: function (VentasApi) {
                            return VentasApi.get_formas_pago();
                        },
                        estados: function (VentasApi) {
                            return VentasApi.get_estados_venta();
                        }
                    }
                })


                .state('ligas', {
                    url: '/ligas',
                    templateUrl: 'templates/ligas.html',
                    controller: 'LigasCtrl as ctrl'
                })
                .state('equipos', {
                    url: '/equipos',
                    templateUrl: 'templates/equipos.html',
                    controller: 'EquiposCtrl as ctrl'
                })
                .state('jugadores', {
                    url: '/jugadores',
                    templateUrl: 'templates/jugadores.html',
                    controller: 'JugadoresCtrl as ctrl'
                })
                .state('temporadas', {
                    url: '/temporadas',
                    templateUrl: 'templates/temporadas.html',
                    controller: 'TemporadasCtrl as ctrl'
                })




                .state('liga', {
                    url: '/liga/{id_liga}',
                    templateUrl: 'templates/temporadas_liga.html',
                    controller: 'TemporadasLigaCtrl as ctrl'
                })
                .state('liga.temporada', {
                    url: '/temporada/{id_temporada}',
                    views: {
                        "@": {
                            templateUrl: 'templates/liga_temporada.html',
                            controller: "LigaTemporadaCtrl as ctrl"
                        }
                    }
                })

                .state('liga.temporada.equipo', {
                    url: '/equipo/{id_equipo}',
                    views: {
                        "@": {
                            templateUrl: 'templates/jugadores_equipo.html',
                            controller: 'JugadoresEquipoCtrl as ctrl'
                        }
                    }

                })
                .state('liga.temporada.jornada', {
                    url: '/jornada/{id_jornada}',
                    views: {
                        "@": {
                            templateUrl: 'templates/partidos.html',
                            controller: 'PartidosCtrl as ctrl'
                        }
                    }

                });

    }]);
app.controller('AppCtrl', [function () {

    }]);












