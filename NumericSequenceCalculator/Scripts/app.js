var Calculatormodule = angular.module("SeqCalcmoduleapp", ['ngResource']);

Calculatormodule.controller("SeqCalcController", function ($scope, $http) {
    $scope.states = false;
    $scope.digits = {};
    // All these scope variables are used for collapsing and expanding the number panels.
    $scope.collapsenumbers = true;
    $scope.collapseoddnumbers = true;
    $scope.collapseevennumbers = true;
    $scope.collapsecustomnumbers = true;
    $scope.collapsefibnoccinumbers = true;

    // logic to show and hide instructions...!!
    $scope.Instructionstatus = function () {
        $scope.states = !($scope.states)
    };

    //Code for show and hide the actual sequences..!! 
    $scope.sequence = {
        state: false
    };

    //This function invokes when the "Generate button" is clicked on after entering the right positive number.
    $scope.GenerateSequence = function () {

        // Entire logic for generating diff sequences is written in Home controller corresponding action methods. 
        // here we make ajax calls to server to get the final sequences to bind it to UI using angularjs. 
        $scope.sequence.state = true;
        //Ajax call for AllNumbers action to get all numbers, we are sending parameter required to generate the numbers untill.
        $http({
            url: "/Home/AllNumbers",
            method: "GET",
            params: { maxvalue: $scope.inputvalue }
        }).success(function (data) {
            $scope.arraylist = data;
        });

        //Http ajax call to action method Fibonocci numbers to get all fib numbers.
        $http({
            url: "/Home/FibonocciNumbers",
            method: "GET",
            params: { maxvalue: $scope.inputvalue }
        }).success(function (data) {
            $scope.fibnumbers = data;
        });

        //Ajax call to the action method Custom numbers to get all custom numbers.

        $http({
            url: "/Home/CustomNumbers",
            method: "GET",
            params: { maxvalue: $scope.inputvalue }
        }).success(function (data) {

            $scope.customnumbers = data;
        });

    };

    // Code for disabling generate button untill the input value is positive whole number..!!
    $scope.disabled = function () {
        if (isNaN($scope.inputvalue)) { return true }
        else
        { return false }
    };

});

