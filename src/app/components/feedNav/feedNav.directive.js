class FeedNavDirective {
  constructor() {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/feedNav/feedNav.html',
      scope: {

      },
      controller: FeedNavCtrl,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class FeedNavCtrl {
  constructor() {
    'ngInject';
    this.feeds = [{
      name: 'Mary',
      title: 'ng-profile test',
      action: 'posted',
      img: 'assets/images/jasmine.png',
      date: 1438226177000
    }, {
      name: 'Ceci',
      title: 'fb post api needs review to approve..',
      action: 'posted',
      img: 'assets/images/babel.png',
      date: 1438226077000
    }, {
      name: 'Mary',
      title: 'Proclaim your praise',
      action: 'uploaded a photo: ',
      img: 'assets/images/jasmine.png',
      date: 1438225177000
    }, {
      name: 'Paul',
      title: 'fb feed api also needs review...',
      action: 'posted',
      img: 'assets/images/angular.png',
      date: 1438216177000
    }];
  }
}

export default FeedNavDirective;