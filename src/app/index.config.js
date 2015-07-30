function config($logProvider, toastr, ezfbProvider) {
	'ngInject';
	// Enable log
	$logProvider.debugEnabled(true);

	// Set options third-party lib
	toastr.options.timeOut = 3000;
	toastr.options.positionClass = 'toast-top-right';
	toastr.options.preventDuplicates = true;
	toastr.options.progressBar = true;

	ezfbProvider.setInitParams({
		appId: '110754329271501',
		channelUrl: 'app/channel.html',
		status: true,
		cookie: true,
		xfbml: true,
		version: 'v2.3'
	});


	// (function(d) {
	// 	// load the Facebook javascript SDK

	// 	var js,
	// 		id = 'facebook-jssdk',
	// 		ref = d.getElementsByTagName('script')[0];

	// 	if (d.getElementById(id)) {
	// 		return;
	// 	}

	// 	js = d.createElement('script');
	// 	js.id = id;
	// 	js.async = true;
	// 	js.src = "//connect.facebook.net/en_US/sdk.js";

	// 	ref.parentNode.insertBefore(js, ref);

	// }(document));
}

export default config;