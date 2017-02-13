const mongoose = require('mongoose');
const assert = require('assert');

mongoose.Promise = global.Promise

before(function(done){
  mongoose.connect('mongodb://localhost/testaroo');
  mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
    done();
  }).on('error', function(error){
    console.log('Connection error:', error);
  });
});
  