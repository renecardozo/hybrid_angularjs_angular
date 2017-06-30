
'use strict';
function MyComponentCtrl(){
    var myCmpCtrl = this;
    function  $onInit(){
        myCmpCtrl.message = 'Hello from angular one';
    }
    myCmpCtrl.$onInit = $onInit;
}
angular.module('myApp')
.controller('myComponentCtrl', MyComponentCtrl)
.component('myComponent', {
    templateUrl:'./angularjs-app/components/my.component.html',
    controllerAs: 'myCmpCtrl',
    controller: 'myComponentCtrl'
})