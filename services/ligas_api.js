angular.module('LigasApp').factory('LigasApi', ['$http',
    function LigasApiFactory($http) {
        var url = 'http://localhost:8000/liga_api/index.php/';

        return {
            get_ligas: function () {
                return $http.get(url + 'ligas/');
            },
            get_jugadores: function () {
                return $http.get(url + 'jugadores/');
            },
            get_equipos: function () {
                return $http.get(url + 'equipos/');
            },
            add_equipo: function (equipo) {
                return $http.post(url + 'equipos/', {equipo: equipo});
            },
            get_equipos_liga_temporada: function (id_liga, id_temporada) {
                return $http.post(url + 'equipos/liga_temporada', {id_liga: id_liga, id_temporada: id_temporada});
            },
            get_temporadas: function () {
                return $http.get(url + 'temporadas/');
            },
            get_jornadas: function () {
                return $http.get(url + 'jornadas/');
            },
            get_jornadas_liga_temporada: function (id_liga, id_temporada) {
                return $http.post(url + 'jornadas/liga_temporada', {id_liga: id_liga, id_temporada: id_temporada});
            },
            get_partidos: function () {
                return $http.get(url + 'partidos/');
            },
            get_temporadas_liga: function (id_liga) {
                return $http.get(url + 'temporadas/liga/' + id_liga);
            },
            get_equipos_liga: function (id_liga) {
                return $http.get(url + 'equipos/liga',
                        {
                            params: {
                                id_liga: id_liga

                            }
                        });
            },
            get_jornadas_liga: function (id_liga) {
                return $http.get(url + 'jornadas/liga',
                        {
                            params: {
                                id_liga: id_liga

                            }
                        });
            },
            get_partidos_jornada: function (id_jornada) {
                return $http.get(url + 'partidos/jornada/' + id_jornada);
            },
            get_jugadores_equipo_liga: function (id_equipo, id_liga) {
                return $http.get(url + 'jugadores/equipo_liga',
                        {
                            params: {
                                id_equipo: id_equipo,
                                id_liga: id_liga

                            }
                        });
            },
            get_partidos_equipo_liga: function (id_equipo, id_liga) {
                return $http.get(url + 'partidos/equipo_liga',
                        {
                            params: {
                                id_equipo: id_equipo,
                                id_liga: id_liga

                            }
                        });
            }



        };
    }]);

