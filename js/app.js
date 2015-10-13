'use strict';

var omsApp = angular.module('omsApp', [
    'ngRoute',
    
    'omsControllers',
    'omsServices'
]);

omsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/orders', {
                templateUrl: 'templates/order-list.html',
                controller: 'OrderListCtrl'
            }).
            when('/orders/create', {
              templateUrl: 'templates/order-create.html',
              controller: 'OrderCreateCtrl'
            }).
            otherwise({
                redirectTo: '/orders'
            });
}]);
