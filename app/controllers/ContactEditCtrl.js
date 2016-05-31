app.controller("ContactEditCtrl", function($scope, $location, $routeParams, contactStorage){
    $scope.title = "Edit Item";
    $scope.submitButtonText = "Update";
    $scope.newContact = {};

    contactStorage.getSingleContact($routeParams.contactId)
        .then(function successCallback(response){
            $scope.newContact=response;
        })
      
    $scope.addNewContact = function(){
        console.log("contactEditctrl");
        contactStorage.updateContact($routeParams.contactId, $scope.newContact)
            .then(function successCallback(response) {
                console.log(response);
                $location.url("/contacts/list");
            });
    };
});