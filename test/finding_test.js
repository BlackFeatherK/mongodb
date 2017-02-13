const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Finding records', function(){

  var char;

  beforeEach(function(done){

    char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });

  });

  it('Finds one record to the database', function(done){
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });
  });

  it('Finds one record by ID to the database', function(done){
    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });

});