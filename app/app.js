let sportUiApp = angular.module('sport-ui-app', ['ngRoute', 'ngMaterial']);

sportUiApp.controller('SportUiMainController', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/balance.json')
        .then(function (response) {
            $scope.balance = response.data;
        }, function () {
            console.log("Get balance failed.");
        });

    $http.get('data/activities.json')
        .then(function (response) {
            $scope.activities = response.data;
        }, function () {
            console.log("Get activities failed.");
        });
}]);

sportUiApp.run(function () {

});