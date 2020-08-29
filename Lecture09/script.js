(function () {
   'use-strict';
   angular.module('DIapp',[])
   .controller('DIcontroller',DIcontroller) ;
   DIcontroller.$inject = ['$scope','$filter'];
   function DIcontroller($scope, $filter) {
       $scope.name = "Ayan";
       $scope.upper = function () {
           var upCase = $filter('uppercase');
          $scope.name = upCase ($scope.name);
       }
   }

})();