angular.module("view2ModuleComponent", []).controller('view2Ctrl', function($scope, rootService){
    rootService.get();
	console.log('view2');
});