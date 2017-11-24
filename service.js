app.service('chartService', function($http) {
    this.getChartData = function() {
        return $http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10.')
    }
})
