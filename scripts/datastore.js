// the purpose of datastore.js is to act like a remote server to store all out input

(function (window){ //iife that automatically runs when html file is openned
  'use strict';

  //TODO: code
  var App = window.App || {}; //create an App namespace if there isnt one already
  //old way to make datastore
  // function DataStore() { //constructor for datastore
  //   // console.log('running the DataStore function');
  //   this.data = {};
  // }

  // //funciton that adds data to datastore
  // //keep in mind that this is all in memory and will get lost when website is closed
  // DataStore.prototype.add = function(key, val) { 
  //   this.data[key] = val; 
  // }
  // DataStore.prototype.get = function(key) { 
  //   return this.data[key]; 
  // }
  // DataStore.prototype.getAll = function(key, val) { 
  //   return this.data; 
  // }
  // DataStore.prototype.remove = function(key) {
  //   delete this.data[key];
  // }
  class DataStore {
    constructor() {
      // console.log('running the DataStore function');
      this.data = {};
    }
    //funciton that adds data to datastore
    //keep in mind that this is all in memory and will get lost when website is closed
    add(key, val) {
      this.data[key] = val;
    }
    get(key) {
      return this.data[key];
    }
    // getAll(key, val) {
    getAll() {
      return this.data;
    }
    remove(key) {
      delete this.data[key];
    }
  }

  App.DataStore = DataStore; //sets App's reference to the data store to the one we made above
  window.App = App; //set window's reference to App
})(window);