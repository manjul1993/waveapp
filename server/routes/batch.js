var express = require('express');
var router = express.Router();
var batches = require('../models/batch');
/* GET home page. */
router.get('/', function(req, res, next) {
  batches.find(function(err,docs){
      console.log(docs);
      res.json(docs);
  });

});


// var logger=function(req, res, next) {
//   var batch=new batches();
//   batches.find(function(err,m){
//     if(err)
//     res.send(err);
//     else
//       {
//         console.log("coming upoda");
//         console.log(batches);
//       res.send(m);
//     }
//   });
// }




router.post('/add', function(req, res, next) {
  console.log(req.body);
        var batch=new batches();
        batch.waveName=req.body.batchname;
        batch.waveType=req.body.batchtype;
        batch.location=req.body.location;
        batch.plannedStartDate=req.body.start_date;
        batch.plannedEndDate=req.body.end_date;
        batch.NumberOfParticipants=req.body.participants;
      batch.save(function(err){
        if(err){
            res.send(err);
        }
        else {
       res.send("batch Saved Sucessfully");
        }
      });
});


router.delete('/delete/:id', function(req, res,next) {
  console.log("delete called");
  console.log(req.params.id);
  batches.remove({waveType:req.params.id},function(err){
    if(err){
        res.send(err);
    }
    else {
    //  next();
    res.send("deleted");
    }
  });

});

// router.use(logger);
module.exports = router;
