(function (){
    'use strict';
    angular.module('myApp')
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('angularjs', {
            url:'angularjs',
            template:'<custom-component></custom-component>',
            controller:'customComponentCtrl'
        })
    }])
})();