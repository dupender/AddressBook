var app = angular.module("AddressBook", ["ngRoute"])     
.constant("firebaseURL","https://adressbook.firebaseio.com/");

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
    when('/contacts/:contactId', {
      templateUrl: 'partials/contact-details.html',
      controller: "ContactViewCtrl"
    }).
    when('/contacts/:contactId/edit', {
          templateUrl: 'partials/contact-new.html',
          controller: "ContactEditCtrl"
      }).
    otherwise('/contacts/list');
});

  