(function(){
	angular
	.module("guitaristsQuiz")
	.controller('listCtrl', ListController);

	ListController.$inject = ['quizMetrics', 'DataService'];

	function ListController(quizMetrics, DataService){
		var vm = this;
		vm.quizMetrics = quizMetrics;
		vm.data = DataService.guitaristsData;
		vm.activeGuitarist = {};
		vm.changeActiveGuitarist = changeActiveGuitarist;
		vm.activateQuiz = activateQuiz;
		vm.search = '';

		function changeActiveGuitarist(index){
			vm.activeGuitarist = index;
		}
		function activateQuiz(){
			quizMetrics.changeState('quiz', true);
		}
	}
})();
