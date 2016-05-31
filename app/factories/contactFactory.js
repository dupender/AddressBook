'use strict';
app.factory("contactStorage", function($q, $http, firebaseURL){
  
  var getContactList = function(){
    let contacts = [];
    return $q(function(resolve, reject){
      $http.get("https://adressbook.firebaseio.com/contacts.json")
        .success(function(contactObject){
          var contactCollection = contactObject;
          Object.keys(contactCollection).forEach(function(key){
            contactCollection[key].id=key;
            contacts.push(contactCollection[key]);
          });
          resolve(contacts);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

  var deleteContact = function(contactId){
    return $q(function(resolve, reject){
      $http
              .delete(`https://adressbook.firebaseio.com//contacts/${contactId}.json`)
              .success(function(objectFromFirebase){
                resolve(objectFromFirebase);
              });
    });
  };

        // id: 0,
        // lastName: "Shmoe",
        // firstName: "Joe",
        // phone:"615-675-2098",
        // city: "Nashville",
        // state: "TN",
        // zipcode: "12345"  

  var postNewContact = function(newContact){
        return $q(function(resolve, reject) {
            $http.post(
                "https://adressbook.firebaseio.com/contacts.json",
                JSON.stringify({
                    lastName: newContact.lastName,
                    firstName: newContact.firstName,
                    phone: newContact.phone,
                    city: newContact.city,
                    state: newContact.state,
                    zipcode: newContact.zipcode
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
  };


  var getSingleContact = function(contactId){
    return $q(function(resolve, reject){
      $http.get(firebaseURL + "contacts/"+ contactId +".json")
        .success(function(contactObject){
          resolve(contactObject);
        })
        .error(function(error){
          reject(error);
        });
    });
  }

  var updateContact = function(contactId, newContact){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "contacts/" + contactId + ".json",
                JSON.stringify({
                    lastName: newContact.lastName,
                    firstName: newContact.firstName,
                    phone: newContact.phone,
                    city: newContact.city,
                    state: newContact.state,
                    zipcode: newContact.zipcode
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
  };

    var updateCompletedStatus = function(newContact){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "contacts/" + newContact.id + ".json",
                JSON.stringify({
                    lastName: newContact.lastName,
                    firstName: newContact.firstName,
                    phone: newContact.phone,
                    city: newContact.city,
                    state: newContact.state,
                    zipcode: newContact.zipcode
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
  };

  return {updateCompletedStatus:updateCompletedStatus, updateContact:updateContact, getSingleContact:getSingleContact, getContactList:getContactList, deleteContact:deleteContact, postNewContact:postNewContact};

});