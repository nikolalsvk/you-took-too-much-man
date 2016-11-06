(function() {
"use strict";

angular.module('public')
.service('CurrentUserService', CurrentUserService);

function CurrentUserService() {
  var service = this;

  service.firstName = '';
  service.lastName = '';
  service.email = '';
  service.phoneNumber = '';
  service.favouriteDish = '';

  service.remeberUser = function(firstName, lastName, email, phoneNumber, favouriteDish) {
    service.firstName = firstName;
    service.lastName = lastName;
    service.email = email;
    service.phoneNumber = phoneNumber;
    service.favouriteDish = favouriteDish;
  }

  service.signedUp = function() {
    return service.firstName !== '';
  }

}

})();
