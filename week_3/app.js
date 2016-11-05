(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .service('MenuSearchService', ['$http', MenuSearchService])
  .controller('NarrowItDownController', ['MenuSearchService', NarrowItDownController])
  .directive('foundItems', foundItems)

  function MenuSearchService($http, searchTerm) {
    var service = this

    service.run = function(searchTerm) {
      service.searchTerm = searchTerm;
      service.foundItems = [];

      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      })
        .then(function(response) {
          service.foundItems = response.data["menu_items"]

          service.foundItems.forEach(function(item, index) {
            var isSubstring = item["description"].indexOf(service.searchTerm) !== -1;

            if(isSubstring) {

            } else {
              service.foundItems.splice(index, 1);
            }
          })

          return service.foundItems;
        });
    }
  }

  function NarrowItDownController(MenuSearchService) {
    var narrowDwnCtrl = this;
    narrowDwnCtrl.MenuSearchService = MenuSearchService;

    narrowDwnCtrl.getMatchedMenuItems = function(searchTerm) {
      narrowDwnCtrl.found = narrowDwnCtrl.MenuSearchService.run(searchTerm);
    }
  }

  function foundItems() {
    return {
      restrict: 'A',
      scope: {
        found: "&found"
      },
      template: "<button ng-repeat='item in found'>Don't want this one</button>"
    }
  }

})();
