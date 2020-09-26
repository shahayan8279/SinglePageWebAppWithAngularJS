(function () {
   'use-strict';
   angular.module('ShoppingListApp',[])
   .controller('ShoppingListController',ShoppingListController);

   var shoppingList1 = [
     'a','b','c','d','e'
   ];

   var shoppingList2 = [
     {
       name : 'a',
       qty : '2'
     },
     {
       name : 'b',
       qty : '20'
     },
     {
       name : 'c',
       qty : '200'
     },
     {
       name : 'd',
       qty : '2000'
     },
     {
       name : 'e',
       qty : '20000'
     }
   ]

   ShoppingListController.$inject = ['$scope'];

   function ShoppingListController($scope) {
     $scope.shoppingList1 = shoppingList1;
     $scope.shoppingList2 = shoppingList2;
     $scope.addToShoppingList2 = function () {
        if ($scope.newItemName == "" || $scope.newItemName == undefined) {
          return;
        }
       var newItem = {
         name : $scope.newItemName,
         qty : $scope.newItemQty
       };
        $scope.shoppingList2.push(newItem);
     }
    }
})();