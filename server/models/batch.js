var mongoose=require('mongoose');
var schema=mongoose.Schema;


var batch=new schema({
  waveName: String,
  waveType: String,
  location: String,
  NumberOfParticipants: Number,
  plannedStartDate: String,
  plannedEndDate: String,
  actualStartDate:String,
  actualEndDate:String,
  ParticipantsMovingOut: Number
});

module.exports=mongoose.model('batch',batch);
