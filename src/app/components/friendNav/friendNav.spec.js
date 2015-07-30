(function() {
	'use strict';

	describe('directives', function() {
		var $compile,
			$rootScope,
			element,
			controller;
		beforeEach(module('ngFb'));

		beforeEach(inject(function(_$compile_, _$rootScope_) {
			// The injector unwraps the underscores (_) from around the parameter names when matching
			$compile = _$compile_;
			$rootScope = _$rootScope_;
			element = $compile("<friend-nav></friend-nav>")($rootScope);
			$rootScope.$digest();
			controller = element.controller('friendNav');

		}));

		it('generates a friend list', function() {
			// Check that the compiled element contains the templated content
			expect(element.find('.md-avatar').length).toBeGreaterThan(0);
		});

		describe('controller', function() {
			it('should pass ctrl cycle', function() {
				expect(controller).toBeDefined();
			});
		});

	});
})();