var app = angular.module("AddressBook", ["ngRoute"])     

app.config(function($routeProvider){
  $routeProvider.
    when('/contacts/list',{
      templateUrl: 'partials/contact-list.html',
      controller: 'ContactListCtrl'
    }).
    when('/contacts/new', {
      templateUrl: 'partials/contact-new.html',
      controller: 'ContactNewCtrl'
    }).
    when('/contacts/details', {
      templateUrl: 'partials/contact-details.html',
      controller: "ContactViewCtrl"
    }).
    otherwise('/contacts/list');
});

  