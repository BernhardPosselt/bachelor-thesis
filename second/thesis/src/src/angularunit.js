// Test
var angular.module('MyApp', ['ngMock']); // inject test mocks into the container

describe('RequestController', function() {

  var $controller,
      $scope,
      $http;

  beforeEach(module('MyApp')); // tell inject to use the MyApp container

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $http = _$httpBackend_; // $http mock provided by angular
    $scope = $rootScope.$new(); // create a new scope 
    $controller = $controller; // used to instantiate controllers and allows
                               // to replace parameters with mocks
  }));


  it('should set the success message if the result is valid', function () {
    $http.expectGET('http://myurl.com/request.php').respond(200, {
      isValid: true
    });

    $controller('RequestController', { // instantiate a new controller instance
      $scope: scope
    });

    $http.flush(); // resolve open AJAX requests

    expect($scope.text).toBe('The request was successful');
  });


});