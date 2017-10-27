angular.module("ROOTModuleService", [])

.factory('rootService', function(){
	return {
		get: function(){
			console.log('root service');
		}
	}
});