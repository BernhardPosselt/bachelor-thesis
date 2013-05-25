describe('RequestController', function() {

  var controller,
    scope,
    http;

  beforeEach(module('MyApp', ['ngMock']));

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    http = _$httpBackend_;
    scope = $rootScope.$new();
    controller = $controller('RequestController', {
      $scope: scope
    });
  }));


  it('should set the success message if the result is valid', function () {
    var response = {
      isValid: true
    };
    http.expectGET('http://myurl.com/request.php').respond(200, response);
    http.flush();

    expect(scope.text).toBe('The request was successful');
  });


});