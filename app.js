var app = angular.module('youtube', []);

app.controller('VideosController', function () {
    this.tab = 1;
    this.selectTab = function (tab) {
        this.tab = tab
    };

    this.videos = [{
        image: "https://docs.angularjs.org/img/angularjs-for-header-only.svg",
        title: "Hi1",
        e: true,
        views: 100025,
        description: "adsf fgnjjfv vjfdvj",
        isFavorite: true
    },{
        image: "https://docs.angularjs.org/img/angularjs-for-header-only.svg",
        title: "Hi2",
        e: true,
        views: 1044550,
        description: "adsf fgnjj bhv fbfhfv vjfdvj",
        isFavorite: true
    },{
        image: "https://docs.angularjs.org/img/angularjs-for-header-only.svg",
        title: "Hi3",
        e: true,
        views: 1534267300,
        description: "adsf fgnjjfv ff d f dfejfjf  f df vjfdvj",
        isFavorite: true
    }];

    this.favorites = [{
        image: "https://docs.angularjs.org/img/angularjs-for-header-only.svg",
        title: "Hi4",
        e: true,
        views: 100024575545,
        description: "adsf fgnjjfv vjfdvj",
        isFavorite: true
    }]
});