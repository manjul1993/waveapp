var React=require('react');

var Batch=React.createClass(
      {

         render:function(){
           console.log("batch called");

                return(
                <div className = "container" id="movie">
                    <div className="jumbotron">
                        <div className = "row">
                        <form className="form-horizontal">
                          <div className="form-group" >
                            <label className="col-lg-4 control-label" for="inputName">Wave Name</label>
                            <div className="col-lg-8">
                            {this.props.batchname}
                            </div>
                          </div>
                          <div className="form-group" >
                            <label className="col-lg-4 control-label" for="inputName">Wave Type</label>
                            <div className="col-lg-8">
                              {this.props.batchtype}
                            </div>
                          </div>
                          <div className="form-group" >
                            <label className="col-lg-4 control-label" for="inputName">Expected start Date</label>
                            <div className="col-lg-8">
                            {this.props.plannedStartDate}
                            </div>
                          </div>
                          <div className="form-group" >
                            <label className="col-lg-4 control-label" for="inputName">Expected end Date</label>
                            <div className="col-lg-8">
                            {this.props.plannedEndDate}
                            </div>
                          </div>
                          <div className="form-group" >
                            <label className="col-lg-4 control-label" for="inputName">Location</label>
                            <div className="col-lg-8">
                              {this.props.location}
                            </div>
                          </div>
                          <div className="form-group" >
                            <label className="col-lg-4 control-label" for="inputName">Number of Participants</label>
                            <div className="col-lg-8">
                            {this.props.NumberofParticipants}
                            </div>
                          </div>
                        </form>
                          </div>
                       </div>
                     </div>)
          }
      })

module.exports=Batch;
