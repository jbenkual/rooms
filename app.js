'use strict';

let app = angular.module('Rooms', []);

app.controller('homeCtrl', ['$scope', function($scope){
  $scope.rooms = [];
  
  $scope.currentRoom = 0;
  $scope.totalCost = 0;
  var counter = 0;

  $scope.addRoom = function (name) {
    var room = {
      name: name,
      width: 10,
      height: 10,
      cost: 0,
      items: [],
      id: $scope.rooms.length
    };
    $scope.rooms.push(room);
    $scope.currentRoom = $scope.rooms.length-1;
  };
  $scope.addRoom("Bedroom");

  $scope.selectRoom = function(idx) {
    $scope.currentRoom = idx;
  }

  $scope.addItem = function (name, qty, cost) {
    cost = parseFloat(cost);
    console.log("add item!", qty)
    for(var i = 0; i  <qty; i ++) {
      $scope.rooms[$scope.currentRoom].items.push({
        name: name,
        cost: cost,
        id: ++counter
      });
      $scope.rooms[$scope.currentRoom].cost += cost;
      $scope.totalCost += cost;
    }
    console.log("items", $scope.rooms[$scope.currentRoom].items)
  }

  $scope.delete = function(id) {
    for(var i = 0; i < $scope.rooms[$scope.currentRoom].items.length; i++) {
      if($scope.rooms[$scope.currentRoom].items[i].id === id) {
        var x = $scope.rooms[$scope.currentRoom].items[i].cost;
        $scope.rooms[$scope.currentRoom].cost -= x;
        $scope.totalCost -= x;
        $scope.rooms[$scope.currentRoom].items.splice(i, 1);
      }
    }
  }
}]);


$(document).ready(function () {
   $(document).foundation()
})