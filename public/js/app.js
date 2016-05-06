var app = angular.module("FormApp",[]);

app.controller("FormController", function ($scope, $http){

    //generate an http request
    $http.get("/find").success(function (response) {
        $scope.forms = response;
    });

    $scope.remove = function (id) {
        alert("You are about to remove the doc with id: " + id);
        $http.delete("/form/" + id).success(function (response) {
            $scope.forms = response;
        });
    }

});