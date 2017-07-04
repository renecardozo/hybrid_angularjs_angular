(function(){
    'use strict';
    angular.module('myApp')
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('angular', {
            url: 'angular',
            template: '<exported-component></exported-component>',
            controller: 'exportedController'
        })
    }]);
})();