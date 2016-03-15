angular.module('app')
.controller('ChartCtrl', ['$scope', '$interval', '$timeout', 'dashboardService', '$routeParams', '$sce',
	function($scope, $interval, $timeout, dashboardService,  $routeParams, $sce) {
        
        function init() {
            $scope.item = $routeParams.item;
            console.log($scope.item);
            $scope.chartUrl = $sce.trustAsResourceUrl("http://192.168.1.110:8080/chart?period=D&service=mysql&h=620&w=1000&items=Living_Temp");
        }
        
        $scope.goBack = function() {
            window.history.back();
        }
        
        
        init();
	}
]);
