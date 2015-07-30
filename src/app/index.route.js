function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'app/login/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'login'
		})
		.state('home', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'main'
		});

	$urlRouterProvider.otherwise('/');
}

export default routerConfig;