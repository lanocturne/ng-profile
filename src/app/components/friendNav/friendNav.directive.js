class FriendNavDirective {
  constructor() {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/friendNav/friendNav.html',
      scope: {
        friends: '='
      },
      controller: FriendNavCtrl,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class FriendNavCtrl {
  constructor(FbFactory) {
    'ngInject';
    let me = this;
    this.people = [{
      name: 'Ceci',
      img: 'assets/images/babel.png',
      live: true
    }, {
      name: 'Mary',
      img: 'assets/images/jasmine.png',
      live: false
    }, {
      name: 'Paul',
      img: 'assets/images/angular.png',
      live: false
    }];

    FbFactory.getLoginStatus().then(function() {
      FbFactory.getFriends().then(function(res) {
        if (res.data.length) {
          me.people = me.people.concat(res.data);
        }
      });
    });


  }
}

export default FriendNavDirective;