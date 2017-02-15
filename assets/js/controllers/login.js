angular.module('app')
    // Chart controller 
    .controller('loginCtrl', ['$scope', '$http','$state', '$timeout', function($scope, $http,$state, $timeout) {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false
        });
        $scope.signin= function(){
            $http({
                    method: "get",
                    url: "http://localhost:8080/angular/assets/js/api/login.json",
                    data:{'username':$scope.username,
                       'password':$scope.password
                    }
                  }).
                  success(function(data, status) {
                    if(data.status!=200){
                        $scope.fixInput = true;
                        $scope.showTip = true;
                        console.info(data.status);
                    }else{
                        //控制器内跳转常用方法
                        $state.go('app.dashboard2');
                    }
                  }).
                  error(function(data, status) {
                    console.error(status);
                 });
            
        };
        $scope.refreshTest = function(portlet) {
            console.log("Refreshing...");
            // Timeout to simulate AJAX response delay
            $timeout(function() {
                $(portlet).portlet({
                    refresh: false
                });
            }, 2000);

        };
    }]);
