class StatusDirective {
  constructor() {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/status/status.html',
      scope: {

      },
      controller: StatusController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class StatusController {
  constructor(FbFactory) {
    'ngInject';
    this.Fb = FbFactory;
    this.posts = [];
  }

  post() {
    // this.Fb.status.post(this.status)
    //   .then(function(res) {
    //     console.log(res);
    //   });
    var me = this;
    me.posts.unshift({
      message: me.status,
      date: Date.now()
    });
    me.status = null;
  }
}

export default StatusDirective;