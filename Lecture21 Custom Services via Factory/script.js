(function () {
  'use-strict';
  angular.module('ShoppingListApp',[])
  .controller ('ShoppingListController1',ShoppingListController1)
  .controller ('ShoppingListController2',ShoppingListController2)
  // .service ('ShoppingListService', ShoppingListService)
  // .service ('ShoppingListService2', ShoppingListService2);
  .factory ('ShoppingListFactory', ShoppingListFactory);


  ShoppingListController1.$inject = ['ShoppingListFactory'];

  function ShoppingListController1(ShoppingListFactory) {
    var list1 = this;

    list1.itemName = "";
    list1.itemQty = '';

    var shoppingList1 = ShoppingListFactory();

    list1.items = shoppingList1.getItems();

    list1.addItem = function () {
      shoppingList1.addItem (list1.itemName,list1.itemQty)
    };

    list1.removeItems = function (itemIndex) {
      shoppingList1.removeItems(itemIndex);
    };
  }

  ShoppingListController2.$inject = ['ShoppingListFactory'];

  function ShoppingListController2(ShoppingListFactory) {
    var list2 = this;

    list2.itemName = "";
    list2.itemQty = '';

    var shoppingList2 = ShoppingListFactory(3);

    list2.items = shoppingList2.getItems();

    list2.addItem = function () {
      try {
        shoppingList2.addItem (list2.itemName,list2.itemQty)
      } catch (error) {
        list2.errorMessage = error.message;
      }
    };

    list2.removeItems = function (itemIndex) {
      shoppingList2.removeItems(itemIndex);
    };
  }

  function ShoppingListService(maxItems) {
    var service = this;

    var items = [] ;

    service.addItem = function (itemName, itemQty) {
      if ((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name : itemName,
        quantity : itemQty
      };
      items.push(item);
    } 
  else {
    throw new Error ("Max items (" + maxItems + ") reached.");
  }; 
    }
    service.removeItems = function (itemIndex) {
      items.splice(itemIndex,1);
    };

    service.getItems = function () {
      return items
    };

  };
  // function ShoppingListService2() {
  //   var service = this;

  //   var items = [] ;

  //   service.addItem = function (itemName, itemQty) {
  //     var item = {
  //       name : itemName,
  //       quantity : itemQty
  //     };
  //     items.push(item);
  //   };

  //   service.removeItems = function (itemIndex) {
  //     items.splice(itemIndex,1);
  //   };

  //   service.getItems = function () {
  //     return items
  //   };

  // };

  function ShoppingListFactory() {
    var factory = function (maxItems) {
      return new ShoppingListService (maxItems);
    };
    
    return factory 

  }
})();