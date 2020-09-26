(function () {
   'use-strict';
   angular.module('MsgApp',[])
   .controller('MsgController',MsgController) 
   .filter('loves', lovesReplace)
   .filter('customReplace', customReplaceFunc);

   MsgController.$inject = ['$scope','$filter','lovesFilter'];

   function MsgController($scope, $filter,lovesFilter) {
       $scope.name = "Ayan";
       $scope.cookieCost = .45;
       $scope.sayMessage = function () {
           var msg = "Yaakov is hungry & he likes cookie, feed him!";
          // var output = $filter('uppercase')(msg);
           return msg
       };
       $scope.sayLovesMessage = function () {
           var msg = "Yaakov is hungry & he likes cookie, feed him!";
           msg = lovesFilter(msg);
           return msg
       }
    //    $scope.sayCustomMessage = function () {
    //     var msg = "Yaakov is hungry & he likes cookie, feed him!";
    //     msg = customReplaceFilter(msg,"Yaakov","Ayan");
    //     return msg
   // }
       $scope.state = 'hungry';
       $scope.feedYaakov = function () {
           $scope.state = 'fed';

           var findbuttontag = document.querySelector('button');
           findbuttontag.textContent = 'Yaakov is Fed';

           return $scope.state
       }     
   }
   function customReplaceFunc() {
    return function (input,targetstring,replacestring) {
       input = input || "";
       input = input.replace(targetstring,replacestring);
       return input
    };
}
    function lovesReplace() {
     return function (input) {
       input = input || "";
       input = input.replace("likes","loves");
       return input
    };
}
})();