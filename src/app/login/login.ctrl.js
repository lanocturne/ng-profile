class LoginCtrl {
	constructor($scope, $state, ezfb) {
		'ngInject';
		// code
		this.Fb = ezfb;
		this.state = $state;
	}

	// methods
	login() {
		var me = this;
		this.Fb.login(null, {
			scope: 'public_profile,email,user_friends'
		}).then(function() {
			me.state.go('home');
		});
	}


}

export default LoginCtrl;