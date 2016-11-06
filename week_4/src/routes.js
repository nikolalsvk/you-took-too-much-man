(function () {

angular.module('MenuApp')
  .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/home/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories/templates/categories-state.template.html',
      controller: 'CategoriesController',
      controllerAs: 'categoriesCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categories.items', {
      url: '/items/{category}',
      templateUrl: 'src/items/templates/items-state.template.html',
      controller: 'ItemsController',
      controllerAs: 'itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    })
}

})();
