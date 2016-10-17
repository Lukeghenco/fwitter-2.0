(function() {

    'use strict';

    function TweetController($scope) {
        $scope.name = 'Ashley'
    }

    angular
        .module('fwitter', ['ui.router', 'templates', 'Devise'])
        .config(function($httpProvider) {
            // for CSRF errors
            $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        })



}());
