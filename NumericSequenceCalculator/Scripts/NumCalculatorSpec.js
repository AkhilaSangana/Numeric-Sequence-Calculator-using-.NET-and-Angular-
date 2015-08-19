describe("Testing a controller", function () {
    var $scope, $http, ctrl;
    var $httpBackend = null;

    beforeEach(function () {
        module('SeqCalcmoduleapp');
        // Injecting all dependencies..!!
        inject(function ($rootScope, $controller, _$httpBackend_) {
            //creating new scope to test the angular code
            $scope = $rootScope.$new();
            // Set up the mock http service responses
            $httpBackend = _$httpBackend_;

            ctrl = function () {
                return $controller('SeqCalcController', { $scope: $scope });
            };
        });
    });

    // this after each function is used for flusing the $httpbackend results when it is called.
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it("It should inspect instructios panel is hidden in the page", function () {
        var controller = ctrl();
        expect($scope.states).toEqual(false);
    });
    it("It should inspect all Number sequences are hidden in the page", function () {
        var controller = ctrl();
        expect($scope.sequence.state).toEqual(false);

    });
    it("It will check the input from the client is positive whole number or not..!!", function () {
        var controller = ctrl();
        $scope.inputvalue = 5;

        var result = $scope.disabled();

        expect(result).toEqual(false);

    });
    describe("It should Check all $http calls from angular to server to get actual required sequences ", function () {
        it("it should check all sequences will be shown after entering positive whole number and after all successfull $http calls ", inject(function ($httpBackend) {

            var controller = ctrl();
            $scope.inputvalue = 3;
            //Mocking $http call to Home/AllNumbers to server to get all numbers.!!
            $httpBackend.expectGET('/Home/AllNumbers?maxvalue=' + $scope.inputvalue).respond({ data: "0123" });

            //Mocking $http call to Home/FibonacciNumbers to server to get all fibonocci numbers..!!
            $httpBackend.expectGET('/Home/FibonocciNumbers?maxvalue=' + $scope.inputvalue).respond({ data: "12" });

            //Mocking $http call to Home/CustomNumbers to server to get all custom numbers..!!
            $httpBackend.expectGET('/Home/CustomNumbers?maxvalue=' + $scope.inputvalue).respond({ data: "12C" });
            $scope.GenerateSequence();

            // Making a call to server
            $httpBackend.flush();

            expect($scope.sequence.state).toEqual(true);
            expect($scope.arraylist).toEqual({ data: "0123" });
            expect($scope.fibnumbers).toEqual({ data: "12" });
            expect($scope.customnumbers).toEqual({ data: "12C" });

        }));
    });
});

