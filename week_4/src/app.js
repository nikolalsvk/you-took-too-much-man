(function () {

angular.module('MenuApp', ['ui.router']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/index');

  // Set up UI states
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'index.html'
    })
};

})();
