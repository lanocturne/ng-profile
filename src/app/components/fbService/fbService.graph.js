class FbFactory {
  constructor($log, $q, ezfb) {
    'ngInject';
    this.$q = $q;
    this.api = '/me';
    this.Fb = ezfb;
    this.$log = $log;
  }

  getLoginStatus() {
    var me = this;
    return me.Fb.getLoginStatus();
  }

  getFriends() {
    var deferred = this.$q.defer();
    this.Fb.api(`${this.api}/friends`, function(response) {
      if (!response || response.error) {
        deferred.reject('Error occured');
      } else {
        deferred.resolve(response);
      }
    });
    return deferred.promise;
  }

  get status() {
    var me = this;
    return {
      post: function(status) {
        return me.Fb.api('/me/feed', 'post', {
          message: status
        });
      }
    };
  }

}

export default FbFactory;