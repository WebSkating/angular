angular.module('app')
    // Chart controller 
    .controller('Dashboard2Ctrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    	var pannel1 = echarts.init(document.getElementById('mainPannel'));
        var pannel2 = echarts.init(document.getElementById('barPannel'));
    	option1 = {
            title: {
                text: '资源'
            },
    	    tooltip: {
    	        trigger: 'item',
    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
    	    },
    	    legend: {
    	        orient: 'vertical',
    	        x: 'left',
                y:40,
    	        data: ['pc服务器', '小型机', '服务器', 'san存储', '刀片服务器', '带库', '百度', '交换机', '负载均衡', '其他']
    	    },
    	    series: [{
    	        name: '访问来源',
    	        type: 'pie',
    	        selectedMode: 'single',
    	        radius: [0, '30%'],

    	        label: {
    	            normal: {
    	                position: 'inner'
    	            }
    	        },
    	        labelLine: {
    	            normal: {
    	                show: false
    	            }
    	        },
    	        data: [
    	            { value: 335, name: '未知设备', selected: true },
    	            { value: 679, name: '网络设备' },
    	            { value: 1548, name: '服务设备' }
    	        ]
    	    }, {
    	        name: '访问来源',
    	        type: 'pie',
    	        radius: ['40%', '55%'],

    	        data: [
    	            { value: 335, name: '负载均衡' },
    	            { value: 310, name: '交换机' },
    	            { value: 234, name: '带库' },
    	            { value: 135, name: '刀片服务器' },
    	            { value: 1048, name: 'san存储' },
    	            { value: 251, name: '服务器' },
    	            { value: 147, name: '小型机' },
    	            { value: 102, name: 'pc服务器' }
    	        ]
    	    }]
    	};
        option2 = {
            color: ['#3398DB'],
            title: {
                text: '事件发生类型Top5排名'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['磁盘利用率', '设备状态', '设备响应时间', 'CPU利用率', '内存利用率'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 25, 50, 75, 90]
                }
            ]
        };

    	pannel1.setOption(option1);
        pannel2.setOption(option2);
        $scope.refreshTest = function(portlet) {
            console.log("Refreshing...");
            // Timeout to simulate AJAX response delay
            $timeout(function() {
                $(portlet).portlet({
                    refresh: false
                });
            }, 2000);

        }
    }]);
