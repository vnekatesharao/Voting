'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('VotingController', function ($scope) {
    $scope.Show = function(){
    	$scope.ShowForm = false;
    };
    $scope.Hide = function(){
    	$scope.ShowForm = true;
    };

  });
