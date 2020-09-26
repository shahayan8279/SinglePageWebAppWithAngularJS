(function () {
  'use-strict';
  angular.module('ShoppingListApp',[])
  .controller ('ShoppingListAddController',ShoppingListAddController)
  .controller ('ShoppingListShowController',ShoppingListShowController)
  .service ('ShoppingListService', ShoppingListService);

  ShoppingListAddController.$inject = ['ShoppingListService'];

  function ShoppingListAddController(ShoppoingListService) {
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQty = '';

    itemAdder.addItem = function () {
      ShoppoingListService.addItem (itemAdder.itemName,itemAdder.itemQty)
    };
  }

  ShoppingListShowController.$inject = ['ShoppingListService'];
  function ShoppingListShowController(ShoppingListService) {
    var showList = this;
    showList.items = ShoppingListService.getItems();
    
    showList.removeItems = function (itemIndex) {
      ShoppingListService.removeItems(itemIndex);
    };
  }

  function ShoppingListService() {
    var service = this;

    var items = [] ;

    service.addItem = function (itemName, itemQty) {
      var item = {
        name : itemName,
        quantity : itemQty
      };
      items.push(item);
    };
    service.getItems = function () {
      return items
    };

    service.removeItems = function (itemIndex) {
      items.splice(itemIndex,1);
    }
  }
})();