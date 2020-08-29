(function () {
   'use-strict';
   angular.module('MsgApp',[])
   .controller('MsgController',MsgController) ;

   MsgController.$inject = ['$scope','$filter'];

   function MsgController($scope, $filter) {
       $scope.name = "Ayan";
       $scope.sayMessage = function () {
           return "Yaakov is hungry, feed him!"
       };
       $scope.state = 'hungry';
       $scope.feedYaakov = function () {
           $scope.state = 'fed';

           var findbuttontag = document.querySelector('button');
           findbuttontag.textContent = 'Yaakov is Fed';

           return $scope.state
       }
   }

})();