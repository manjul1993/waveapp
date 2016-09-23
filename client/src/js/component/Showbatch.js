var React=require('react');
var Batch=require('./Batch.js');


var Showbatch=React.createClass(
      {
        getInitialState: function() {
                    return {data: []};
              },
        componentWillMount:function()
        {
          console.log("Show batch called");
                  $.ajax({
                url: 'http://localhost:8080/batch',
                dataType: 'json',
                type: 'GET',
                success: function(data) {
                  console.log(data);
                  this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(this.props.url, status, err.toString());
                }.bind(this)
              });
        },
         render:function(){
           var batchNodes = this.state.data.map(function(batch) {
                                console.log(batch);

                         return (
                           <Batch  b={batch} batchname={batch.waveName} batchtype={batch.waveType} location={batch.location} Numberofparticipants={batch.Numberofparticipants} plannedStartDate={batch.plannedStartDate} plannedEndDate={batch.plannedEndDate}>
                           </Batch>//end to list of movies
                         );
                       });

                    return(
                    <div className="movieList">
                    {batchNodes}
                     </div>)
          }
      })

module.exports=Showbatch;
