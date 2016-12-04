(function(){
	angular
		.module("quiz")
		.controller('listCtrl', ListController);

		function ListController($scope){
			$scope.hwdp = 'hwdp strazy miejskiej';
		}
})();
