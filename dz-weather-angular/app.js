var app = angular.module('weather', ['ui.bootstrap']);

app.controller('WeatherController', function ($scope, API) {

    API.getForecastWeather().then(function (forecasts) {
        $scope.forecasts = forecasts;
        console.log(data)
    });
    
    $scope.current = [];
    
    $scope.forecasts = [];
});

app.directive('forecast', function () {
    return{
        restrict: 'E',
        templateUrl: 'forecast.html'
    }
});

app.service('API', function ($http, $q) {
    return{
        getForecastWeather: function () {
            var key = 'ad5d39cc015543028f6203619161811';
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'http://api.apixu.com/v1/current.json',
                params: {
                    part: "snippet",
                    key: key,
                    q: "Odesa",
                    days: 5
                }
            }).then(function (data) {
                var y_forecasts = data.forecast;
                var my_forecasts = y_forecasts.map(function (forecast, index) {
                    return {
                        temp: forecast.forecastday[0].day.maxtemp_c
                    }
                });
                console.log(my_forecasts);
                d.resolve(my_forecasts)
            });
            return d.promise
        }
    }
});