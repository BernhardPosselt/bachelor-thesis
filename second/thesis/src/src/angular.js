(function ($, angular, undefined) {

  angular.module('MyApp', []).
    controller('RequestController', ['$http', '$scope', function($http, $scope) {

      $http.get('http://myurl.com/request.php').success(function (data) {
        if (data.isValid) {
          $scope.text = 'The request was successful';
        } else {
          $scope.text = 'The request was not successful';
        }
      });

    }]);

})(jQuery, angular);

