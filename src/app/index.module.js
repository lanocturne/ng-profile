/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import LoginCtrl from './login/login.ctrl';
import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
import FbFactory from '../app/components/fbService/fbService.graph';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import FriendNavDirective from '../app/components/friendNav/friendNav.directive';
import FeedNavDirective from '../app/components/feedNav/feedNav.directive';
import StatusDirective from '../app/components/status/status.directive';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';

angular.module('ngFb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial',
    'ezfb', 'angularMoment'
  ])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

.config(routerConfig)

.run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('FbFactory', FbFactory)
  .controller('MainController', MainController)
  .controller('LoginCtrl', LoginCtrl)
  .directive('acmeNavbar', () => new NavbarDirective())
  .directive('friendNav', () => new FriendNavDirective())
  .directive('feedNav', () => new FeedNavDirective())
  .directive('status', () => new StatusDirective())
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));