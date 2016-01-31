require('angular')

var app = angular.module('main', [])

app.controller('MainController', ['$scope', function($scope) {
  this.message = "My Notebooks"
}]);

app.directive('notebook', ['$http', function($http){
  return {
    restrict: 'E',
    templateUrl: 'notebook-template.html',
    controller: function(){
      this.message = "My Notebooks v2";
      this.notes = [];
      var notes = this;

      $http.get('/notes').success(function(data) {
        console.log("DADAS: "+data.body);
        notes.notes = data;
      });

    },
    controllerAs: 'notesCtrl'
  };
}]);
