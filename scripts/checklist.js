(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  class CheckList {
    constructor(selector) {
        if (!selector) { 
          throw new Error('No selector provided'); 
        }

        //this was formElement and was not working
        this.$element = $(selector);
        if (this.$element.length === 0) { 
          throw new Error('Could not find element with selector: ' + selector);
        }
    }

    addClickHandler(fn){
      this.$element.on('click', 'input', function(event) { // runs only if an input is caused by a click
        var email = event.target.value;
        this.removeRow(email);
        fn(email);
      }.bind(this));
    }
    
    addRow(coffeeOrder) {
      // prevent duplicates
      this.removeRow(coffeeOrder.emailAddress);

      var rowElement = new Row(coffeeOrder);
      this.$element.append(rowElement.$element);
    }

    removeRow(email) {
      this.$element
      .find('[value="' + email + '"]')
      .closest('[data-coffee-order="checkbox"]')
      .remove();
    }
  }

  class Row {
    constructor (coffeeOrder) {
      var $div = $('<div></div>', {
        'data-coffee-order': 'checkbox',
        'class': 'checkbox'
      });

      var $label = $('<label></label>');

      var $checkbox = $('<input></input>', {
        type: 'checkbox',
        value: coffeeOrder.emailAddress
      });

      var description = coffeeOrder.size + ' ';
      if (coffeeOrder.flavor) {
        description += coffeeOrder.flavor + ' ';
      }

      description += coffeeOrder.coffee + ', ';
      description += ' (' + coffeeOrder.emailAddress + ')';
      description += ' [' + coffeeOrder.strength + 'x]';

      // jquery is adding rows to a div in our index.html file
      $label.append($checkbox);
      $label.append(description);
      $div.append($label);

      this.$element = $div;
    }
  }
  
  // newly created orders are added to a checklist on the webpage
  // essentially a row constructor
  // function Row(coffeeOrder) {
  //   var $div = $('<div></div>', {
  //     'data-coffee-order': 'checkbox',
  //     'class': 'checkbox'
  //   });

  //   var $label = $('<label></label>');

  //   var $checkbox = $('<input></input>', {
  //     type: 'checkbox',
  //     value: coffeeOrder.emailAddress
  //   });

  //   var description = coffeeOrder.size + ' ';
  //   if (coffeeOrder.flavor) {
  //     description += coffeeOrder.flavor + ' ';
  //   }

  //   description += coffeeOrder.coffee + ', ';
  //   description += ' (' + coffeeOrder.emailAddress + ')';
  //   description += ' [' + coffeeOrder.strength + 'x]';

  //   // jquery is adding rows to a div in our index.html file
  //   $label.append($checkbox);
  //   $label.append(description);
  //   $div.append($label);
  // }
  
  // function addRow(coffeeOrder) {
  //   var rowElement = new Row(coffeeOrder);
  //   this.$element.append(rowElement.$element);
  // }

  App.CheckList = CheckList;
  window.App = App;
})(window);