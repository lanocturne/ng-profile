(function() {
	'use strict';

	describe('controllers', function() {
		var $controller;
		beforeEach(module('ngFb'));

		beforeEach(inject(function(_$controller_) {
			// The injector unwraps the underscores (_) from around the parameter names when matching
			$controller = _$controller_('MainController');
		}));

		it('should define controller', function() {
			expect($controller).toBeDefined();
		});
	});
})();