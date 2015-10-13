'use strict';

var omsControllers = angular.module('omsControllers', []);

omsControllers.controller('OrderListCtrl', ['$scope', 'Order', 'Clients',
    function($scope, Order, Clients) {
        $scope.orders = [];
        
        function clientInfoById(clients, id) {
            return clients.filter(function(client) {
                return client.id === id;
                })[0];
        }
        
        Order.query(function(orders) {
            Clients.query(function(clients) {
                
                orders.orders.forEach(function(order) {
                    order['client_name'] = clientInfoById(clients.clients, order.client_id).name;
                });
                
                $scope.orders = orders.orders;
            });
        });
    }
]);

omsControllers.controller('OrderCreateCtrl', ['$scope', '$location', 'Order', 'Clients',
    function($scope, $location, Order, Clients) {
        $scope.clients = [];
        
        Clients.query(function(data) {
            $scope.clients = data.clients;
        });
        
        $scope.create = function(isValid, order) {
            if (!isValid) {
                return;
            }
            
            $scope.submiting = true;
            
            order['client_id'] = order.client.id;
            
            Order.save(order, function() {
                $location.path('/orders');
            });
        }
    }
]);
