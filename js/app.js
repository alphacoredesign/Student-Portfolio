// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/partial-home.html'

        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('work', {
            url: '/work',
            templateUrl: 'views/work.html'
        })

        //WEDDING TEMPLATE STATE VIEWS
        .state('wedding', {
            url: '/wedding',
            templateUrl: 'views/wedding-template.html'
        })

        //PHOTOGRAPHY CO. VIEWS
        .state('photography', {
            url: '/photography',
            templateUrl: 'views/photography.html'
        })

        //PERSONAL TRAINER VIEWS
        .state('personal-trainer', {
            url: '/personal-trainer',
            templateUrl: 'views/personal-trainer.html'
        })

        //UNIVERSITY VIEWS
        .state('university', {
            url: '/university',
            templateUrl: 'views/school.html'
        })

        //HOBBIES VIEWS
        .state('hobbies', {
            url: '/hobbies',
            templateUrl: 'views/hobbies.html'
        })

        //HIRE ME VIEW
        .state('hire-me', {
            url: '/hire-me',
            templateUrl: 'views/hire-me.html'
        })

});
