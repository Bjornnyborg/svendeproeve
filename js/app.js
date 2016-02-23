(function(){


    var app = angular.module('svendeprove', [
        'ngRoute',
        'svendeCtrls'
    ]);

    app.config(['$routeProvider',
                function($routeProvider) {
                    $routeProvider.
                    when('/svendeprove', {
                        templateUrl: 'partials/frontarea.html',
                        controller: 'FrontAreaCtrl'
                    }).
                    when('/svendeprove/:subject', {
                        templateUrl: 'partials/subject.html',
                        controller: 'SubjectCtrl'
                    }).
                    otherwise({
                        redirectTo: '/svendeprove'
                    });
                }]);



    app.directive('frontArea', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/frontarea.html'
        };
    });

})();