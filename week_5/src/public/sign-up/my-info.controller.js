(function() {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$http', 'CurrentUserService']
function MyInfoController($http, CurrentUserService) {
  var ctrl = this;

  ctrl.firstName = CurrentUserService.firstName;
  ctrl.lastName = CurrentUserService.lastName;
  ctrl.email = CurrentUserService.email;
  ctrl.phoneNumber = CurrentUserService.phoneNumber;
  ctrl.favouriteDish = CurrentUserService.favouriteDish;

  ctrl.signedUp = function() {
    return CurrentUserService.signedUp();
  }

}

})();
