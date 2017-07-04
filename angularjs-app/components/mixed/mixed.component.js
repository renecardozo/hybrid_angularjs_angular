(function (){
    'use strict';
    function CustomComponentCtrl(){}
    angular.module('myApp')
    .controller('mixedComponentCtrl', CustomComponentCtrl)
    .component('mixedComponent', {
        templateUrl: './angularjs-app/components/mixed/mixed.component.html',
        controllerAs: 'mixedCmpCtrl',
        controller: 'mixedComponentCtrl'
    })
})();