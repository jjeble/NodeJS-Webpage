

var counter = function(arr){
  return 'There are ' +  arr.length + ' elements in the array';

};

var adder = function(a,b){
  return `The sum of the two numbers is ${a+b}`;
};

var pi= 3.142;
//module.exports.counter = counter;
//module.exports.adder = adder;

module.exports = {counter:counter, adder:adder,pi:pi};
