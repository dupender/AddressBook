app.controller("ContactNewCtrl", function($scope, $http, $location, contactStorage){
      $scope.welcome = "hello";
      $scope.submitButtonText = "New";
      $scope.newContact = {
        lastName: "",
        firstName: "",
        phone:"",
        city: "",
        state: "",
        zipcode: ""
        },
   
  $scope.addNewContact = function(){
        contactStorage.postNewContact($scope.newContact)
            .then(function successCallback(response) {
                console.log(response);
                $location.url("/contacts/list");
            });
         };   
   });   