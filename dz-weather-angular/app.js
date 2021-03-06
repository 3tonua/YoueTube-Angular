var app = angular.module('weather', ['ui.bootstrap']);

app.controller('WeatherController', function ($scope, API) {

    API.getForecastWeather().then(function (current) {
        $scope.current = current;
    });

    API.getForecastWeather().then(function (forecasts) {
        $scope.forecasts = forecasts;
    });
    
    $scope.current = [];
    
    $scope.forecasts = [];

    $scope.Setting = {
        query: null,
        q: 'Odessa Ukraine'
    };

    $scope.regions = [{
        name: 'Одесса',
        value: 'Odessa Ukraine'
    },{
        name: 'Киев',
        value: 'Kiev'
    },{
        name: 'Лондон',
        value: 'London'
    },{
        name: 'Париж',
        value: 'Paris'
    },{
        name: 'Нью Йорк',
        value: 'New York'
    }];


    $scope.searchCity = function () {
        API.searchCity($scope.searchSetting).then(function (forecasts) {
            $scope.searched = forecasts;
            console.log(forecasts);
        });
    };
    // $scope.searched = [];
});

/*app.directive('forecast', function () {
    return{
        restrict: 'E',
        templateUrl: 'forecast.html'
    }
});*/

app.service('API', function ($http, $q) {
    return{
        getForecastWeather: function () {
            var key = 'ad5d39cc015543028f6203619161811';
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'http://api.apixu.com/v1/forecast.json',
                params: {
                    part: "snippet",
                    key: key,
                    q: 'Paris',
                    days: 5
                }
            }).then(function (data) {
                /*console.log(data.data.forecast);
                console.log(data.data.current);*/
                console.log(data.data);
                d.resolve(data)
            });
            return d.promise
        }
    }
});

