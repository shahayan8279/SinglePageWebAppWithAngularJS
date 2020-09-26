(function () {
   'use-strict';
   angular.module('CounterApp',[])
   .controller('CounterController',CounterController);

   CounterController.$inject = ['$scope','$filter','$timeout'];

   function CounterController($scope, $filter,$timeout) {
      $scope.counter = 0;
      $scope.upCounter = function () {
        $timeout(function () {
            $scope.counter++;
            console.log('Counter Incremented!');
        },2000)  
      };
    }
})();