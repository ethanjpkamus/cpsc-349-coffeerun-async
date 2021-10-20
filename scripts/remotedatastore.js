(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  class RemoteDataStore {
    constructor(url) {
      if (!url) {
        throw new Error('No remote URL supplied.');
      }
      this.serverUrl = url;
    }

    // var remoteDS = new App.RemoteDataStore("https://co.audstanley.com/coffeeorders");
    // remoteDS.add('ethan@normandy.com', {emailAddress: 'ethan@normandy.com', coffee: 'espresso', strength: 50})
    add(key, val) {
      return $.post(this.serverUrl, val, function (serverResponse) {
        console.log(serverResponse);
      });
    }

    getAll(cb) {
      return $.get(this.serverUrl, function (serverResponse) {
        if (cb) {
          console.log(serverResponse);
          cb(serverResponse);
        }
      });
    }

    get(key, cb) {
      return $.get(this.serverUrl + '/' + key, function(serverResponse) {
        if (cb) {
          console.log(serverResponse);
          cb(serverResponse);
        }
      });
    }

    remove(key) {
      return $.ajax(this.serverUrl + '/' + key, {
        type: 'DELETE'
      });
    }
  }


  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
 })(window);
 