var app = angular.module("AddressBook", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"}, {name: "All Contacts"}, {name:"New Contact"}];
});

app.controller("AddressCtrl", function($scope){
  $scope.welcome = "hello";
      $scope.showListView = true;
      $scope.newContact = {};
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

      $scope.newContactButton = function(){
          console.log("you clicked new Contact");
          $scope.showListView = false;
      };
      
      $scope.allContact = function(){
        console.log("you clicked all contacts");
        $scope.showListView = true;
      };

      $scope.addNewItem = function(){
        // $scope.newTask.isCompleted = false;
        $scope.newContact.id = $scope.contacts.length;
        console.log("you added a new contact", $scope.newContact);
        $scope.contacts.push($scope.newContact);
        $scope.newContact="";
      };
});

