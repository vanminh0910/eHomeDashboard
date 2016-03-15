// Here is the starting point for your application code.

(function() {
    var templatePath = 'scripts/';
    
    angular.module('app', [
        'gridster',
        'ngMaterial',
        'ngAnimate', 
        'ui.bootstrap', 
        'ngRoute',
        'ui.router',
        'nvd3'])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/main', {
                        templateUrl: templatePath + 'demo/main/view.html',
                        controller: 'MainCtrl'
                    })
                    .when('/dashboard', {
                        templateUrl: templatePath + 'dashboard/dashboard.html',
                        controller: 'DashboardCtrl'
                    })
                    .when('/chart/:item', {
                        templateUrl: templatePath + 'chart/chart.html',
                        controller: 'ChartCtrl'
                    })
                    .otherwise({
                        redirectTo: '/dashboard'
                    });
            }
        ])
        .controller('RootCtrl', function($scope) {
            $scope.$on('$locationChangeStart', function(e, next, current) {
                $scope.page = next.split('/').splice(-1);
                $scope.styleUrl = templatePath + $scope.page + '/style.css'
            });
        });
})();
