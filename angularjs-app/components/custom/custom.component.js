(function(){
    'use strict';
    function MyComponentCtrl(){
        var myCmpCtrl = this;
        function  $onInit(){
            myCmpCtrl.message = 'Hello from angular one';
        }
        myCmpCtrl.$onInit = $onInit;
    }
    angular.module('myApp')
    .controller('customComponentCtrl', MyComponentCtrl)
    .component('customComponent', {
        templateUrl:'./angularjs-app/components/custom/custom.component.html',
        controllerAs: 'customCmpCtrl',
        controller: 'customComponentCtrl'
    })
})();