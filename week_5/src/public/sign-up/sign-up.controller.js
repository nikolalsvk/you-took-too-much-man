(function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'CurrentUserService']
function SignUpController($http, CurrentUserService) {
  var ctrl = this;

  ctrl.firstName = '';
  ctrl.lastName = '';
  ctrl.email = '';
  ctrl.phoneNumber = '';
  ctrl.favouriteDish = '';
  ctrl.error = '';
  ctrl.signedUp = false;

  ctrl.signUp = function() {
    $http.get(`https://nikolalsvk-coursera-week-5.herokuapp.com/menu_items/${ctrl.favouriteDish}.json`)
      .then(function(result) {
        ctrl.signedUp = true;

        console.log(result);

        CurrentUserService.remeberUser(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phoneNumber, result.data);

        ctrl.error = undefined;
      }, function (result) {
        ctrl.signedUp = false;

        ctrl.error = `No such menu number exists. ${ctrl.favouriteDish} was your choice`;
      });
  }

  ctrl.valid = function() {
    return (ctrl.firstName !== '' &&
            ctrl.lastName !== '' &&
            ctrl.email !== '' &&
            ctrl.phoneNumber !== '' &&
            ctrl.favouriteDish !== '');
  }
}

})();
