(function() {

    'use strict';

    function HomeController($scope) {
        $scope.name = 'Ashley is Home'
    }

    HomeController.$inject = ['$scope']

    angular
        .module('fwitter')
        .controller('HomeController', HomeController)



}());
