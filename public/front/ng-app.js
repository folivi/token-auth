/**
 * Created by folivi on 22/11/15.
 */
angular
    .module('tokenAuth', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'front/views/login.html',
                controller: 'loginController'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'front/views/home.html',
                controller: 'homeController'
            });
    });
