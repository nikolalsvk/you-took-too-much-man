angular.module('Data', [])
.service('MenuDataService', MenuDataService);

function MenuDataService($http) {
  var service = this;
  service.http = $http;

  service.getAllCategories = function() {
    var url = "https://davids-restaurant.herokuapp.com/categories.json";

    service.http.get(url)
      .then(function(results) {
        service.categories = results;

        console.log(service.categories);
      })
  }

  service.getItemsForCategory(categoryShortName) = function {
    var url = `https://davids-restaurant.herokuapp.com/menu_items.json?category=${categoryShortName}`;

    service.http.get(url)
      .then(function(result) {
        service.items = result;

        console.log(service.items);
      });
  }
}
