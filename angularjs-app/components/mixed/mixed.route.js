(function(){
    'use strict';
    angular.module('myApp')
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('angularjs-angular', {
            url:'angularjs-angular',
            template:'<mixed-component></mixed-component>',
            controller: 'mixedComponentCtrl'
        });
    }]);
})();