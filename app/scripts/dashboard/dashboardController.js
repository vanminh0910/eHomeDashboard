angular.module('app')

.controller('DashboardCtrl', ['$scope', '$interval', '$timeout', 'dashboardService', '$location', '$rootScope',
	function($scope, $interval, $timeout, dashboardService, $location, $rootScope) {
        
        function init() {
            if ($rootScope.dashboards)
                $scope.dashboards = $rootScope.dashboards;
            else {
                $scope.initializeDashboards();
            }
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
        
        $scope.initializeDashboards = function() {
            $scope.dashboards = {
            "1":{
                "id":"1",
                "name":"Dashboard",
                "widgets":[
                    // Living room
                    {
                        "col":0, "row":0, "sizeY":1, "sizeX":1, "$$hashKey":"object:1",
                        "name":"Phòng Khách", "type":"NumberItem", "state":"",
                        "link":"http://192.168.1.110:8080/rest/items/Living_Temp"
                    }, {
                        "col":1, "row":0, "sizeY":1, "sizeX":1, "$$hashKey":"object:2",
                         "name":"Đèn Chính", "type":"SwitchItem", "state":"OFF",
                        "link":"http://192.168.1.110:8080/rest/items/Light_Living_LED"
                    }, {
                        "col":2,"row":0, "sizeY":1, "sizeX":1, "$$hashKey":"object:3",
                        "name":"Đèn Vàng", "type":"SwitchItem","state":"OFF",
                        "link":"http://192.168.1.110:8080/rest/items/Light_Living_SUB"
                    }, ,{
                        "col":3, "row":0, "sizeY":1, "sizeX":1, "$$hashKey":"object:4",
                        "name":"Đèn Tròn", "type":"SwitchItem", "state":"OFF",
                        "link":"http://192.168.1.110:8080/rest/items/Light_Living_SUB"
                    },
                    
                    // Kitchen 
                    {
                        "col":0, "row":1, "sizeY":1, "sizeX":1, "$$hashKey":"object:5",
                        "name":"Phòng Bếp", "type":"NumberItem", "state":"",
                        "link":"http://192.168.1.110:8080/rest/items/Living_Humid"
                    }, {
                        "col":1, "row":1, "sizeY":1, "sizeX":1, "$$hashKey":"object:6",
                        "name":"Đèn Trắng", "type":"SwitchItem", "state":"OFF",
                        "link":"http://192.168.1.110:8080/rest/items/Kitchen_Living_LED"
                    }, {
                        "col":2, "row":1, "sizeY":1, "sizeX":1, "$$hashKey":"object:7",
                        "name":"Đèn Vàng", "type":"SwitchItem", "state":"OFF",
                        "link":"http://192.168.1.110:8080/rest/items/Kitchen_Living_SUB"
                    }, {
                        "col":4, "row":1, "sizeX":1, "sizeY":1, "$$hashKey":"object:8",
                        "name":"Khí Độc",
                        "link": ""
                    },{
                        "col":3, "row":1, "sizeX":1, "sizeY":1, "$$hashKey":"object:9",
                        "name": "Báo Khói",
                    }, 
                    
                    // Bedroom 1
                    {
                        "col":0, "row":2, "sizeY":1, "sizeX":1, "$$hashKey":"object:10",
                        "name":"Phòng 1", "type":"NumberItem", "state":"",
                        "link":"http://192.168.1.110:8080/rest/items/Living_Temp"
                    },{
                        "col":1, "row":2, "sizeY":1, "sizeX":1, "$$hashKey":"object:11",
                        "name":"Đèn Chính", "type":"SwitchItem", "state":"OFF",
                        "link":"http://192.168.1.110:8080/rest/items/Light_Bedroom1_LED"
                    },{
                        "col":2, "row":2, "sizeY":1, "sizeX":1, "$$hashKey":"object:12",
                        "name":"Đèn Vàng", "type":"SwitchItem", "state":"OFF",
                        "link":"http://192.168.1.110:8080/rest/items/Light_Bedroom1_SUB"
                    },{
                        "col":3, "row":2, "sizeX":1, "sizeY":1, "$$hashKey":"object:13",
                        "name":"Đèn Hắt", "type":"SwitchItem", "state":"OFF",
                        "link":"http://192.168.1.110:8080/rest/items/Light_Bedroom1_BULB"
                    },{
                        "col":4, "row":2," sizeX":1, "sizeY":1, "$$hashKey":"object:14",
                        "name":"Presence", "state": "10:34PM"
                    },
                    // Bedroom 2
                    {
                        "col":0, "row":3, "sizeY":1, "sizeX":1, "$$hashKey":"object:15",
                        "name":"Phòng 2", "type":"NumberItem", "state":"29.4",
                        "link":"http://192.168.1.110:8080/rest/items/Bedroom1_Temp"
                    },{
                        "col":1, "row":3, "name":"Đèn Chính", "sizeX":1, "sizeY":1, "$$hashKey":"object:16"
                    },{
                        "col":2, "row":3, "name":"Đèn Tròn","sizeX":1, "sizeY":1, "$$hashKey":"object:17"
                    },{
                        "col":3, "row":3, "sizeX":1, "sizeY":1, "$$hashKey":"object:18",
                        "name":"Presence", "state": "10:54PM"
                    },
                    // Outside
                    {
                        "col":0, "row":4, "sizeY":1, "sizeX":1, "$$hashKey":"object:19",
                        "name":"Bên Ngoài", "type":"NumberItem", "state":"31.8",
                        "link":"http://192.168.1.110:8080/rest/items/Outside_Temp"
                    },{
                        "col":1, "row":4, "sizeX":1, "sizeY":1, "$$hashKey":"object:20",
                        "name":"Độ Ẩm Vườn", "type":"NumberItem", "state":"56%", 
                        "link":"http://192.168.1.110:8080/rest/items/Garden_Moisture"
                    },{
                        "col":2, "row":4, "sizeX":1,"sizeY":1,"$$hashKey":"object:21",
                        "name":"Độ Ẩm Vườn", "type":"NumberItem", "state":"59%",
                    },{
                        "col":3, "row":4,"sizeX":1, "sizeY":1, "$$hashKey":"object:22",
                        "name":"Máy Giặt", "type":"SwitchItem", "state":"OFF",
                        "link": ""
                    },{
                        "name":"Weather Chart", "sizeX":3,"sizeY":4, "$$hashKey":"object:23", "row":0, "col":5
                    },{
                        "name":"Clock","sizeX":3,"sizeY":1, "$$hashKey":"object:24", "row":4, "col":5
                    },{
                        "name":"Cửa Chính", "sizeX":1, "sizeY":1, "$$hashKey":"object:25", "row":4, "col":4,
                        "type":"SwitchItem", "state":"OFF",
                        "link": ""
                    }]
                },

                "2": {
                    "id":"2",
                    "name":"Other",
                    "widgets":[]
                }
            };  
            
            $rootScope.dashboards = $scope.dashboards;
        }

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
        
        $scope.start_polling = function () {
            var interval = 5000;
            if (!$scope.polling_status) {
                $scope.polling_status = true;
                $scope.polling_promise = $interval(function() {
                    // update state for all widget here
                    angular.forEach($scope.dashboard.widgets, function(widget) {
                        if (widget.link) {
                            dashboardService.getItem(widget.link).then(function(response) {
                                //console.log(response.data);
                                widget.state = response.data.state;
                                
                                //convert flaot number to 2 digits rounded
                                val = parseFloat(widget.state);
                                if(!isNaN(val)) {
                                    widget.state = val.toFixed(1);
                                }
                            }, function(err) {
                                console.log(err);
                            });    
                        }
                        
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
        
        $scope.showChart = function(widget) {
            if (!widget.hasChart) {
                $location.path('/chart/' + widget.name);    
            }
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
