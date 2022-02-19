let sportUiApp = angular.module('sport-ui-app', ['ngRoute', 'ngMaterial']);

sportUiApp.controller('SportUiMainController', ['$scope', '$http', function ($scope, $http) {

    $scope.newActivity = {
        time: "30min",
        date: new Date(),
        work: "Basic gymnastic"
    };

    const dateFormat = {weekday: "short", month: "short", year: "numeric", day: "2-digit"};


    $scope.addActivity = function () {

        const data = {
            activityName: $scope.newActivity.work,
            time: $scope.newActivity.time
        };

        $http.post(window.__env.apiUrl + "/activities", data)
            .then(function (response) {
                console.log(response.data)
            }, function (response) {
                console.log(response.data)
            });

        $scope.onBalanceSelect();

        console.log($scope.newActivity.time + ":" + $scope.newActivity.date.toLocaleDateString(
            "de-DE", {weekday: "short", month: "short", year: "numeric", day: "2-digit"}
        ));
    };

    $scope.onActivitiesSelect = function () {
        $http.get(window.__env.apiUrl + "/activities")
            .then(function (response) {
                $scope.activities = response.data.map(item => ({
                    time: item.duration,
                    date: new Date(item.createdAt).toLocaleDateString("de-DE", dateFormat),
                    earn: "0,50 €",
                    work: item.activity
                }))
            }, function (response) {
                console.log("Get activities failed." + response.statusText);
            })
    };

    $scope.onBalanceSelect = function () {
        $http.get(window.__env.apiUrl + "/balance")
            .then(function (response) {
                $scope.balance = response.data.value;
                console.log(response.data)
            }, function (response) {
                console.log("Get balance failed. " + response.statusText)
            })
    };
}]);

sportUiApp.run(function () {

});