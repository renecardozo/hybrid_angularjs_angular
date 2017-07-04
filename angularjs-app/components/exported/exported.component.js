(function (){
    'use strict';
    function ExportedController(){}
    angular.module('myApp')
    .controller('exportedController', ExportedController)
    .component('exportedComponent', {
        templateUrl: './angularjs-app/components/exported/exported.component.html',
        controllerAs: 'exportedCtrl',
        controller: 'exportedController'
    });
})();