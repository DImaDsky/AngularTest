'use strict';

let testApp = angular.module('testApp', [
  'ui.router'
]).
config(function($stateProvider, $urlServiceProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      component: 'shop'
    })
    .state('cart', {
      url: '/cart',
      component: 'cart'
    })
    .state('history', {
      url: '/history',
      component: 'history'
    });
  $urlServiceProvider.rules.otherwise({ state: 'main' });
});
