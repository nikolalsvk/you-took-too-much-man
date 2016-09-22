(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .controller('ToBuyShoppingController',
              ['ShoppingListCheckOffService', ToBuyShoppingController])
  .controller('AlreadyBoughtShoppingController',
              ['ShoppingListCheckOffService', AlreadyBoughtShoppingController])


  function ShoppingListCheckOffService() {
    var service = this

    var toBuy = ["10 cookies", "12 eggs", "13 apples", "14 cats", "15 dimensions"]
    var bought = []

    service.buy = function(index, item) {
      toBuy.splice(index, 1)
      bought.push(item)
    }

    service.getToBuy = function() {
      return toBuy
    }

    service.getBought = function() {
      return bought
    }
  }

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    this.toBuy = ShoppingListCheckOffService.getToBuy();

    this.buy = function(index, item) {
      ShoppingListCheckOffService.buy(index, item);
    }
  }

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    this.bought = ShoppingListCheckOffService.getBought();
  }

})();
