(function () {
    'use-strict';
    angular.module('ShoppingListCheckOff',[])
    .controller ('ToBuyController',ToBuyController)
    .controller ('AlreadyBoughtController',AlreadyBoughtController)
    .service ('ShoppingListCheckOffService',ShoppingListCheckOffService);
 
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
 
    function ToBuyController(ShoppingListCheckOffService) {
      var ToBuy = this ;
      ToBuy.Items = ShoppingListCheckOffService.getToBuyItems();
      ToBuy.ItemBought = function (itemIndex) {
        ShoppingListCheckOffService.BoughtItems(itemIndex);
      };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var AlreadyBought = this ;
      AlreadyBought.Items = ShoppingListCheckOffService.getAlreadyBoughtItems();
      
    }    

    function ShoppingListCheckOffService() {
      var service = this;
  
      var ToBuyItems = [
        {
          name : "Cookies",
          quantity : 10
        },
        {
          name : "Biscuits",
          quantity : 9
        },
        {
          name : "Choclates",
          quantity : 8
        },
        {
          name : "Cadbury",
          quantity : 7
        },
        {
          name : "Bourbon",
          quantity : 6
        },
        {
          name : "Lays",
          quantity : 5
        },
        {
          name : "Gopal",
          quantity : 4
        },
        {
          name : "Prangles",
          quantity : 3
        },
        {
          name : "Wafers",
          quantity : 2
        },
        {
          name : "Coke",
          quantity : 1
        }
      ] ;

      var BoughtItems = [];
  
      service.getToBuyItems = function () {
        return ToBuyItems
      };
  
      service.BoughtItems = function (itemIndex) {
        BoughtItems.push(ToBuyItems[itemIndex]);
        ToBuyItems.splice(itemIndex,1);
        
      }

      service.getAlreadyBoughtItems = function () {
        return BoughtItems
      };

    }
      
 })();