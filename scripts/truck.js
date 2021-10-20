// the purpose of truck.js is to act like a POST request and send the request to our remote server (datastore.js)

(function (window) {
  'use strict'
  var App = window.App || {};

  class Truck {
    constructor(truckId, db) {
      this.truckId = truckId;
      this.db = db;
      console.log('in the truck constructor');
    }
    createOrder(order) {
      console.log('adding order for ' + order.emailAddress);
      return this.db.add(order.emailAddress, order);
    }
    deliverOrder(customerId) {
      console.log('Delivering order for ' + customerId);
      return this.db.remove(customerId);
    }
    printOrders() {
      var customerIdArray = Object.keys(this.db.getAll());
      console.log('Truck #' + this.truckId + ' has pending orders: ');
      customerIdArray.forEach(function(id){
        console.log(this.db.get(id));
      }.bind(this)); //this is not automatically assigned, so we must specify
    } //dont need a semicolon here since this is in a class
  }

  App.Truck = Truck;
  window.App = App;

  // test code
  // var myTruck = new App.Truck('007', new App.DataStore());
  // myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
  // myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
  // myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});

  // myTruck.deliverOrder('m@bond.com');
  // myTruck.deliverOrder('dr@no.com');

})(window);