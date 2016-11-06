angular.module('MenuApp', [])
.component('CategoriesComponent', CategoriesComponent);

function CategoriesComponent(MenuDataService) {
  var cmp = this;

  cmp.categories = MenuDataService.categories;
}

CategoriesComponent.$inject('MenuDataService');
