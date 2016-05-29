app.controller("ContactListCtrl", function($scope){
      $scope.welcome = "hello";
      $scope.contacts = [
        {
          id: 0,
        lastName: "Shmoe",
        firstName: "Joe",
        phone:"615-675-2098",
        city: "Nashville",
        state: "TN",
        zipcode: "12345"
        },
        {
          id: 1,
        lastName:"I am",
        firstName:"Sam",
        phone:"111-222-3333",
        city: "SuessVille",
        state: "WY",
        zipcode: "09876"
        },
        {
          id: 2,
        lastName: "Upender",
        firstName: "Dhru",
        phone: "123-456-7890",
        city: "Manhattan",
        state: "NY",
        zipcode: "11754"
        }
      ];
   });   