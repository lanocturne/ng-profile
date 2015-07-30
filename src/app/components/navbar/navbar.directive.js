class NavbarDirective {
  constructor() {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavbarController {
  constructor(moment, ezfb, $state) {
    'ngInject';
    this.ezfb = ezfb;
    this.state = $state;
    // "this.creation" is avaible by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
    let me = this;
    ezfb.getLoginStatus()
      .then(function(res) {
        if (!res.authResponse) {
          me.state.go('login');
        } else {
          me.loginStatus = res;
        }
      });
  }

  logout() {
    var me = this;
    this.ezfb.logout().then(function() {
      me.state.go('login');
    });
  }

}

export default NavbarDirective;