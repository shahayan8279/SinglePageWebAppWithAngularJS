(function () {
   'use-strict';
   angular.module('NameCalculator',[])
   .controller('NameCalculatorController',function ($scope) {
       $scope.name = "";
       $scope.totalValue = 0;
       $scope.displayNumeric =function () {
           var totalNameValue = calculateNumericForString($scope.name); // Get the total value
           $scope.totalValue = totalNameValue;
       };
     function calculateNumericForString(string) {
        var totalStringValue = 0;
        for (let i=0; i<string.length; i++) {
            totalStringValue += string.charCodeAt(i);
        } 
        return totalStringValue
     }  ;
   }) ;

})();