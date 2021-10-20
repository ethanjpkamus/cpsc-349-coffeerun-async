(function (window) {
  'use strict';

  var App = window.App || {};
  var Validation = {
    isCompanyEmail: function (email) {
      return /.+@normandy\.com$/.test(email);
    } 
  };
  
  // add to namespace
  App.Validation = Validation;
  window.App = App;
})(window);
 