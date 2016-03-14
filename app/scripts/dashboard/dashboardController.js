angular.module('app')

.controller('DashboardCtrl', ['$scope', '$interval', '$timeout', 'dashboardService', 
	function($scope, $interval, $timeout, dashboardService) {
        
        function init() {
            $scope.dashboard = $scope.dashboards['1'];
            $scope.polling_status = false;
            $scope.start_polling();
        }
        
        
		
        $scope.gridsterOptions = {
			margins: [10, 10],
			columns: 8,
            width: 'auto',
            colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
            rowHeight: 150, // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
            floating: false,
			draggable: {
				handle: 'h3'
			},
            resizable: {
                enabled: true,
                handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
                
                // optional callback fired when resize is started
                start: function(event, $element, widget) {},
                
                // optional callback fired when item is resized,
                resize: function(event, $element, widget) {
                    //if (widget.chart.api) widget.chart.api.update();
                }, 
                
                // optional callback fired when item is finished resizing 
                stop: function(event, $element, widget) {
                    $timeout(function(){
                        //if (widget.chart.api) widget.chart.api.update();
                    },400);
                }
            } 
		};
        
        $scope.dashboards = {"1":{"id":"1","name":"Home","widgets":[{"col":0,"row":2,"sizeY":1,"sizeX":1,"name":"Bedroom 1","type":"NumberItem","state":"31.8","link":"http://192.168.1.110:8080/rest/items/Living_Temp","$$hashKey":"object:5"},{"col":0,"row":4,"sizeY":1,"sizeX":1,"name":"Nhiệt Độ","type":"NumberItem","state":"31.8","link":"http://192.168.1.110:8080/rest/items/Living_Temp","$$hashKey":"object:6"},{"col":0,"row":1,"sizeY":1,"sizeX":1,"name":"Kitchen","type":"NumberItem","state":"59.7","link":"http://192.168.1.110:8080/rest/items/Living_Humid","$$hashKey":"object:7"},{"col":2,"row":2,"sizeY":1,"sizeX":1,"name":"Đèn Chính","type":"SwitchItem","state":"ON","link":"http://192.168.1.110:8080/rest/items/Light_Living_LED","$$hashKey":"object:8"},{"col":1,"row":2,"sizeY":1,"sizeX":1,"name":"Đèn Chính","type":"SwitchItem","state":"ON","link":"http://192.168.1.110:8080/rest/items/Light_Living_LED","$$hashKey":"object:10"},{"col":2,"row":1,"sizeY":1,"sizeX":1,"name":"Đèn Vàng","type":"SwitchItem","state":"ON","link":"http://192.168.1.110:8080/rest/items/Light_Living_LED","$$hashKey":"object:11"},{"col":3,"row":0,"sizeY":1,"sizeX":1,"name":"Đèn Chính","type":"SwitchItem","state":"ON","link":"http://192.168.1.110:8080/rest/items/Light_Living_LED","$$hashKey":"object:12"},{"col":2,"row":0,"sizeY":1,"sizeX":1,"name":"Đèn Chính","type":"SwitchItem","state":"ON","link":"http://192.168.1.110:8080/rest/items/Light_Living_LED","$$hashKey":"object:13"},{"col":0,"row":0,"sizeY":1,"sizeX":1,"name":"Living Room","type":"NumberItem","state":"31.8","link":"http://192.168.1.110:8080/rest/items/Living_Temp","$$hashKey":"object:15"},{"col":0,"row":3,"sizeY":1,"sizeX":1,"name":"Bedroom 2","type":"NumberItem","state":"59.7","link":"http://192.168.1.110:8080/rest/items/Living_Humid","$$hashKey":"object:16"},{"col":1,"row":0,"sizeY":1,"sizeX":1,"name":"Đèn Chính","type":"SwitchItem","state":"ON","link":"http://192.168.1.110:8080/rest/items/Light_Living_LED","$$hashKey":"object:17"},{"col":1,"row":1,"sizeY":1,"sizeX":1,"name":"Đèn Trắng","type":"SwitchItem","state":"ON","link":"http://192.168.1.110:8080/rest/items/Light_Living_SUB","$$hashKey":"object:18"},{"name":"Weather Chart","sizeX":3,"sizeY":4,"$$hashKey":"object:163","row":0,"col":5},{"name":"Moisture","sizeX":1,"sizeY":1,"$$hashKey":"object:189","row":4,"col":1},{"name":"Đèn Chính","sizeX":1,"sizeY":1,"$$hashKey":"object:193","row":3,"col":1},{"name":"Đèn Tròn","sizeX":1,"sizeY":1,"$$hashKey":"object:197","row":3,"col":2},{"name":"Moisture 2","sizeX":1,"sizeY":1,"$$hashKey":"object:211","row":4,"col":2},{"name":"Đèn Hắt","sizeX":1,"sizeY":1,"$$hashKey":"object:221","row":2,"col":3},{"name":"Washer","sizeX":1,"sizeY":1,"$$hashKey":"object:229","row":4,"col":3},{"name":"Clock","sizeX":3,"sizeY":1,"$$hashKey":"object:241","row":4,"col":5},{"name":"B1_Presence","sizeX":1,"sizeY":1,"$$hashKey":"object:255","row":2,"col":4},{"name":"B2_Presence","sizeX":1,"sizeY":1,"$$hashKey":"object:259","row":3,"col":3},{"name":"Door Lock","sizeX":1,"sizeY":1,"$$hashKey":"object:263","row":4,"col":4},{"name":"Khí Độc","sizeX":1,"sizeY":1,"$$hashKey":"object:93","row":1,"col":4},{"name":"Khói","sizeX":1,"sizeY":1,"$$hashKey":"object:97","row":1,"col":3}]},"2":{"id":"2","name":"Other","widgets":[{"col":1,"row":1,"sizeY":1,"sizeX":2,"name":"Other Widget 1"},{"col":1,"row":3,"sizeY":1,"sizeX":1,"name":"Other Widget 2"}]}};
        
        /*

		$scope.dashboards = {
			'1': {
				id: '1',
				name: 'Home',
				widgets: [{
					col: 4,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Right Widget",
                    type: "NumberItem",
                    state: "30.5",
                    link: "http://192.168.1.110:8080/rest/items/Living_Temp"
				}, {
					col: 0,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Nhiệt Độ",
                    type: "NumberItem",
                    state: "30.5",
                    link: "http://192.168.1.110:8080/rest/items/Living_Temp"
				}, {
					col: 1,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Độ Ẩm",
                    type: "NumberItem",
                    state: "65.2",
                    link: "http://192.168.1.110:8080/rest/items/Living_Humid"
				}, {
					col: 3,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Đèn Chính",
                    type: "SwitchItem",
                    state: "ON",
                    link: "http://192.168.1.110:8080/rest/items/Light_Living_LED"
                }, {
					col: 3,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Đèn Chính",
                    type: "SwitchItem",
                    state: "ON",
                    link: "http://192.168.1.110:8080/rest/items/Light_Living_LED"
                }, {
					col: 3,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Đèn Chính",
                    type: "SwitchItem",
                    state: "ON",
                    link: "http://192.168.1.110:8080/rest/items/Light_Living_LED"
                }, {
					col: 3,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Đèn Chính",
                    type: "SwitchItem",
                    state: "ON",
                    link: "http://192.168.1.110:8080/rest/items/Light_Living_LED"
                }, {
					col: 3,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Đèn Chính",
                    type: "SwitchItem",
                    state: "ON",
                    link: "http://192.168.1.110:8080/rest/items/Light_Living_LED"
                }, {
					col: 3,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Đèn Chính",
                    type: "SwitchItem",
                    state: "ON",
                    link: "http://192.168.1.110:8080/rest/items/Light_Living_LED"
                }, {
                    }, {
					col: 0,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Nhiệt Độ",
                    type: "NumberItem",
                    state: "30.5",
                    link: "http://192.168.1.110:8080/rest/items/Living_Temp"
				}, {
					col: 1,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Độ Ẩm",
                    type: "NumberItem",
                    state: "65.2",
                    link: "http://192.168.1.110:8080/rest/items/Living_Humid"
				}, {
					col: 3,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					name: "Đèn Chính",
                    type: "SwitchItem",
                    state: "ON",
                    link: "http://192.168.1.110:8080/rest/items/Light_Living_LED"
                }, {
					col: 0,
					row: 1,
					sizeY: 1,
					sizeX: 2,
					name: "Đèn Vàng",
                    type: "SwitchItem",
                    state: "OFF",
                    link: "http://192.168.1.110:8080/rest/items/Light_Living_SUB"
				}]
			},
			'2': {
				id: '2',
				name: 'Other',
				widgets: [{
					col: 1,
					row: 1,
					sizeY: 1,
					sizeX: 2,
					name: "Other Widget 1"
				}, {
					col: 1,
					row: 3,
					sizeY: 1,
					sizeX: 1,
					name: "Other Widget 2"
				}]
			}
		};
        
        */

		$scope.clear = function() {
			$scope.dashboard.widgets = [];
		};

		$scope.addWidget = function() {
			$scope.dashboard.widgets.push({
				name: "New Widget",
				sizeX: 1,
				sizeY: 1
			});
		};
        
        $scope.save = function() {
			console.log(JSON.stringify($scope.dashboards));
		};
        
        // We want to manually handle `window.resize` event in each directive.
        // So that we emulate `resize` event using $broadcast method and internally subscribe to this event in each directive
        // Define event handler
        $scope.events = {
            resize: function(e, scope){
                $timeout(function(){
                    //scope.api.update()
                },200)
            }
        };

        angular.element(window).on('resize', function(e){
            $scope.$broadcast('resize');
        });
        
        $scope.start_polling = function () {
            var interval = 5000;
            if (!$scope.polling_status) {
                $scope.polling_status = true;
                $scope.polling_promise = $interval(function() {
                    // update state for all widget here
                    angular.forEach($scope.dashboard.widgets, function(widget) {
                        dashboardService.getItem(widget.link).then(function(response) {
                            //console.log(response.data);
                            widget.state = response.data.state;
                        });
                    });
                }, interval);
            }
            
        }
        
        $scope.$on('$destroy', function() {
            //console.log('Destroying polling promise');
            // Make sure that the interval is destroyed too
            if (angular.isDefined($scope.polling_promise)) {
                $interval.cancel($scope.polling_promise);
                $scope.polling_promise = undefined;
            }
        });
        
        $scope.changeState = function(widget) {
            if (widget.state == 'ON') {
                widget.state = 'OFF';
            } else if (widget.state == 'OFF') {
                widget.state = 'ON';
            }
            
            dashboardService.setItemState (widget.link, widget.state).then(function() {
                console.log('Updated state');
            })
        }
        
        init();
	}
])

.controller('CustomWidgetCtrl', ['$scope', '$modal',
	function($scope, $modal) {

		$scope.remove = function(widget) {
			$scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
		};

		$scope.openSettings = function(widget) {
			$modal.open({
				scope: $scope,
				templateUrl: 'scripts/dashboard/widget_settings.html',
				controller: 'WidgetSettingsCtrl',
				resolve: {
					widget: function() {
						return widget;
					}
				}
			});
		};

	}
])

.controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$modalInstance', 'widget',
	function($scope, $timeout, $rootScope, $modalInstance, widget) {
		$scope.widget = widget;

		$scope.form = {
			name: widget.name,
			sizeX: widget.sizeX,
			sizeY: widget.sizeY,
			col: widget.col,
			row: widget.row
		};

		$scope.sizeOptions = [{
			id: '1',
			name: '1'
		}, {
			id: '2',
			name: '2'
		}, {
			id: '3',
			name: '3'
		}, {
			id: '4',
			name: '4'
		}];

		$scope.dismiss = function() {
			$modalInstance.dismiss();
		};

		$scope.remove = function() {
			$scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
			$modalInstance.close();
		};

		$scope.submit = function() {
			angular.extend(widget, $scope.form);

			$modalInstance.close(widget);
		};

	}
])

// helper code
.filter('object2Array', function() {
	return function(input) {
		var out = [];
		for (i in input) {
			out.push(input[i]);
		}
		return out;
	}
});
