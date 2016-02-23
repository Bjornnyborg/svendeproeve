(function(){

    var svendeCtrls = angular.module('svendeCtrls', []);

    svendeCtrls.controller('FrontAreaCtrl', ['$scope', '$http',
                                             function () {

                                             }]);

    svendeCtrls.controller('SubjectCtrl', ['$scope', '$routeParams',
                                           function($scope, $routeParams) {
                                               $scope.subject = $routeParams.subject;
                                           }]);

})();