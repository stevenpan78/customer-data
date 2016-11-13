var release = function release($scope,$http){
    $http.get('data/customer.json').then(function(response){
        $scope.names = response.data;
    });
}

angular.module("mainApp")
        .controller('mainCtrl',release);