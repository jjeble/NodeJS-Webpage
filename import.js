var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;

};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Ryu');

var people = [james,mary,ryu];
people.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name +" said " + msg );
  });
});

james.emit('speak'," Hi guys ");
ryu.emit('speak','Boss, chai lao');
mary.emit('speak'," Mary had a little lamb ");




//element.on('click', function(){})

//var myEmitter = new events.EventEmitter();

//myEmitter.on('someEvent',function(msg){
//console.log(msg);});

//myEmitter.emit('someEvent', 'the event was emitted');
