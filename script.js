var app = angular.module('chartApp', []);
app.controller('chartCtrl', function($scope, $http, $interval,chartService) {
    $scope.price = [];
    $scope.currencyLabel = [];

    $scope.ChartFun = function(){
    chartService.getChartData().then(function (response) {
    $scope.price=[];
    $scope.chartData = response.data;
    angular.forEach($scope.chartData, function(data){
      $scope.price.push(data.price_usd);
      $scope.currencyLabel.push(data.name);
    });
   
    var chartDom = angular.element(document.getElementById('currencyChart'));
    var CurrChart = new Chart(chartDom, {
                type: 'bar',
                data: {
                labels:$scope.currencyLabel,
                datasets: [{
                label: 'Cryptocurrency',
                data: $scope.price,
                backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
              '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
              '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
              '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
              '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
              '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
              '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
              '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
              '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
              '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
              '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
              '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
              '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
              '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
              '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
              '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
              '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
              '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
              '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
              '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
              '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
              '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
              '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
              '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
                }]
            },
            options: {
                scales: {
                    yAxes: [{
              type: "linear", 
              display: true,
              position: "left",
              scaleLabel: {
                display: true,
                labelString: "Exchange rate(in USD)"
              }
              }]

                }
            }
  });
  });
  }
       $scope.ChartFun();
       $interval(function() { $scope.ChartFun(); }, 300000);

    });