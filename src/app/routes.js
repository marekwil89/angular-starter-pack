angular.module("routesModule", ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state({
        name: 'view1-component',
        url: '/',
        templateUrl: 'app/components/view1/view1.component.html',
        controller: 'view1Ctrl'
    })
    .state({
        name: 'view2-component',
        url: '/view2',
        templateUrl: 'app/components/view2/view2.component.html',
        controller: 'view2Ctrl'
    })
});