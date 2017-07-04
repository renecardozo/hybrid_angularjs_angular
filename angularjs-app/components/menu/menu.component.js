(function(){
    'use strict';
    function MenuController(){
        var menuCtrl = this;
        function $onInit(){}
        menuCtrl.$onInit = $onInit;
    }
    angular.module('myApp')
    .controller('menuController', MenuController)
    .component('menuComponent', {
        templateUrl: './angularjs-app/components/menu/menu.component.html',
        controllerAs: 'menuCtrl',
        controller: 'menuController'
    });
})();