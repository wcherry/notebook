require('angular')

var app = angular.module('main', [])

app.controller('MainController', ['$scope', function($scope) {
    $scope.message = 'Angular Works!';
    this.message ="And more Other stuff";
}])
