describe('RequestController', function() {

  var $controller,
      $scope,
      $http;

  beforeEach(module('MyApp', ['ngMock']));

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $http = _$httpBackend_;
    $scope = $rootScope.$new();
    $controller = $controller;
  }));


  it('should set the success message if the result is valid', function () {
    $http.expectGET('http://myurl.com/request.php').respond(200, {
      isValid: true
    });

    $controller('RequestController', {
      $scope: scope
    });

    $http.flush();

    expect($scope.text).toBe('The request was successful');
  });


});