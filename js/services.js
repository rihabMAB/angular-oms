'use strict';

const APIURL = 'https://angular-api-demo.herokuapp.com:443/api/v1/';
const TOKEN = 'd994e0ae14852308ba6c37e4bbaab18329b4a9b13d486ca6ec1dfd05d5a5a2c4';
var omsServices = angular.module('omsServices', ['ngResource']);
var params = {
    access_token: TOKEN
};

omsServices.factory('Order', ['$resource',
    function($resource){
        return $resource(APIURL + 'orders', params, {
            query: {method: 'GET'},
            save: {method: 'POST'}
        });
    }
]);

omsServices.factory('Clients', ['$resource',
    function($resource){
        return $resource(APIURL + 'clients', params, {
            query: {method: 'GET'}
        });
    }
]);
