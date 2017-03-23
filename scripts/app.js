'use strict';
angular.module('gitUsers', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('/', {
                url:'/',
                templateUrl : 'views/card.html',
                controller : 'listController'
                    }
            );
            
            $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    });