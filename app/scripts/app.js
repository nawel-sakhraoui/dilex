'use strict';

/**
 * @ngdoc overview
 * @name dilexApp
 * @description
 * # dilexApp
 *
 * Main module of the application.
 */
angular
  .module('dilexApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngRoute',
    
    
  ])
  .config(   function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        
       
      })
    
      .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'MainCtrl',
  
        }) 
        
    .when('/apropos', {
        templateUrl: 'views/apropos.html',
        controller: 'MainCtrl',

      }) ;
  });