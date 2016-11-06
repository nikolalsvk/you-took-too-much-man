angular.module('Data')
  .service('MenuDataService', MenuDataService);

function MenuDataService($http) {
  var service = this;
  service.http = $http;

  service.getAllCategories = function() {
    var url = "https://davids-restaurant.herokuapp.com/categories.json";

    return service.http.get(url)
      .then(function(results) {
        service.categories = results.data;

        console.log(service.categories);

        return service.categories;
      });
  }

  service.getItemsForCategory = function(categoryShortName) {
    var url = `https://davids-restaurant.herokuapp.com/menu_items.json?category=${categoryShortName}`;

    return service.http.get(url)
      .then(function(result) {
        service.items = result.data;

        console.log(service.items);

        return service.items;
      });
  }
}
