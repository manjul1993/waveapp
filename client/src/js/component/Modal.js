var React=require('react');

var Modal=React.createClass(
      {
        getInitialState: function() {
                      return {loc:'',start:'',end:'',par:''};
       },

        changeloc:function(e){
              this.setState({loc: e.target.value});//setting the state fo batch type
              console.log(this.state.loc);
        },
        changestart:function(e){
              this.setState({start: e.target.value});//setting the state fo batch type
              console.log(this.state.start);
        },
        changeend:function(e){
              this.setState({end: e.target.value});//setting the state fo batch type
              console.log(this.state.end);
        },
        changepar:function(e){
              this.setState({par: e.target.value});//setting the state fo batch type
              console.log(this.state.par);
        },
        update:function(){
                            this.props.update(this.state.loc,this.state.start,this.state.end,this.state.par);

        },
        render:function(){
               return(
                 <div id="myModal" className="modal fade" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 className="modal-title">Enter Details for Batch {this.props.batchname}</h4>
                    </div>
                    <div className="modal-body">
                    <form className="form-horizontal">
                      <div className="form-group" >
                        <label className="col-lg-4 control-label" for="inputName">Location</label>
                        <div className="col-lg-8">
                          <input className="form-control" id="inputName" placeholder={this.state.loc} onChange={this.changeloc} type="text"/>
                        </div>
                      </div>
                      <div className="form-group" >
                        <label className="col-lg-4 control-label" for="inputName">Expected start Date</label>
                        <div className="col-lg-8">
                          <input className="form-control" id="inputName" placeholder={this.state.start} onChange={this.changestart} type="text"/>
                        </div>
                      </div>
                      <div className="form-group" >
                        <label className="col-lg-4 control-label" for="inputName">Expected end Date</label>
                        <div className="col-lg-8">
                          <input className="form-control" id="inputName" placeholder={this.state.end} onChange={this.changeend} type="text"/>
                        </div>
                      </div>
                      <div className="form-group" >
                        <label className="col-lg-4 control-label" for="inputName">Number of Participants</label>
                        <div className="col-lg-8">
                          <input className="form-control" id="inputName" placeholder={this.state.par} onChange={this.changepar} type="text"/>
                        </div>
                      </div>

                    </form>

                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.update}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
              )}
                })

module.exports=Modal;
