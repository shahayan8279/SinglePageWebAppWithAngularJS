(function () {
    'use-strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController) ;
 
    LunchCheckController.$inject = ['$scope'];
 
    function LunchCheckController($scope) {
      $scope.textInput = '';
      //$scope.noOfWords = 0;
      $scope.message = '';
      $scope.calculateNoOfWords = function () {
          var inputText = $scope.textInput;
          if (inputText.length == '') {
           $scope.message = 'Please enter data first';
            return $scope.message
          }
          else {
          var textSplit = inputText.split(',');
          var noOfWords = 0;
          for (let i = 0; i < textSplit.length; i++) {
            if (textSplit[i] == '' || textSplit[i] == ' ') {
              noOfWords = noOfWords - 1;
            }
              noOfWords++;
          };
        }
        if (noOfWords <=3) {
          $scope.message = 'Enjoy!';
          return $scope.message
        }
         // $scope.noOfWords = noOfWords;
         $scope.message = 'Too Much!';
         return $scope.message
      };
    }
 
 })();