app.controller("ContactViewCtrl", function($scope, $http, $routeParams, contactStorage){
    $scope.contacts = [];
    $scope.selectedContact = {};
    console.log("ContactViewCtrl",$routeParams.contactId);

    contactStorage.getContactList().then(function(contactCollection){
        console.log("contactCollection from promise", contactCollection);
        $scope.contacts = contactCollection;

        $scope.selectedContact = $scope.contacts.filter(function(contact){
      return contact.id === $routeParams.contactId;
    })[0];
    });
});