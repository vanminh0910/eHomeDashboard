(function () {
    'use strict';
    
    angular.module('app').service('chartService', ['$q', '$http', ChartService]);
    
    function ChartService($q, $http) {
        
        var openhab_url = 'http://192.168.1.110:8080/rest/items/';
        
        this.getItems = function () {
            return $http.get(openhab_url);            
        }
        
        this.getItem = function(link) {
            return $http.get(link);
        }
        
        this.setItemState = function(link, new_state) {
            return $http({
                method: 'POST',
                url: link,
                data: new_state,
                headers: { 'Content-Type': 'text/plain' }
            });
        }
        
        
        /**
         *  Data & Options Generators
         
        function lineChartOptions() {
            return {
                chart: {
                    type: 'lineChart',
                    margin : {
                        top: 20,
                        right: 20,
                        bottom: 70,
                        left: 55
                    },
                    x: function(d){ return d.x; },
                    y: function(d){ return d.y; },
                    useInteractiveGuideline: true,
                    xAxis: {
                        axisLabel: 'Time (ms)',
                        axisLabelDistance: -5
                    },
                    yAxis: {
                        axisLabel: 'Voltage (v)',
                        tickFormat: function(d){
                            return d3.format('.02f')(d);
                        },
                        axisLabelDistance: -10
                    }, 
                    showLegend: false
                }
            };  
        }
        
        function lineChartData() {
            var sin = [],sin2 = [], cos = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 100; i++) {
                sin.push({x: i, y: Math.sin(i/10)});
                sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
                cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
            }

            //Line chart data should be sent as an array of series objects.
            return [
                {
                    values: sin,      //values - represents the array of {x,y} data points
                    key: 'Sine Wave', //key  - the name of the series.
                    color: '#ff7f0e'  //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: 'Cosine Wave',
                    color: '#2ca02c'
                },
                {
                    values: sin2,
                    key: 'Another sine wave',
                    color: '#7777ff',
                    area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        }
        
        function discreteBarChartOptions() {
            return {
                chart: {
                    type: 'discreteBarChart',
                    margin : {
                        top: 40,
                        right: 20,
                        bottom: 70,
                        left: 55
                    },
                    x: function(d){return d.label;},
                    y: function(d){return d.value;},
                    showValues: true,
                    valueFormat: function(d){
                        return d3.format(',.0f')(d);
                    },
                    duration: 500,
                    xAxis: {
                        axisLabel: 'X Axis',
                        axisLabelDistance: -10
                    },
                    yAxis: {
                        axisLabel: 'Y Axis',
                        axisLabelDistance: -10
                    }
                }
            }
        }
        
        function discreteBarChartData() {
            return [
                {
                    key: "Cumulative Return",
                    values: [
                        {
                            "label" : "A" ,
                            "value" : 29.765957771107
                        } ,
                        {
                            "label" : "B" ,
                            "value" : 0
                        } ,
                        {
                            "label" : "C" ,
                            "value" : 32.807804682612
                        } ,
                        {
                            "label" : "D" ,
                            "value" : 196.45946739256
                        } ,
                        {
                            "label" : "E" ,
                            "value" : 0.19434030906893
                        } ,
                        {
                            "label" : "F" ,
                            "value" : 98.079782601442
                        } ,
                        {
                            "label" : "G" ,
                            "value" : 13.925743130903
                        } ,
                        {
                            "label" : "H" ,
                            "value" : 5.1387322875705
                        }
                    ]
                }
            ];
        }
        
        */ 
            
    }
})();
