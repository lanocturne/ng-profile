class MainController {
  constructor($timeout, webDevTec, toastr) {
    'ngInject';

    this.creationDate = 1438148996206;
    this.toastr = toastr;
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/lanocturne/ng-profile" target="_blank"><b>ng-profile</b></a>');
    this.classAnimation = '';
  }
}

export default MainController;