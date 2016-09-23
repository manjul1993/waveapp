var React=require('react');
//var Movieposter=require('./Movieposter.js');
//var Moviedesc=require('./Moviedesc.js');
var Modal=require('./Modal.js');
var Batchdetails=React.createClass(
      {
        getInitialState:function()
        {
          return {status:false,batchname: '',batchtype:''};
        },
        save:function(e)
        {
              this.setState({batchname: e.target.value});//setting the state fo batch name
              console.log(this.state.batchname);
        },
        changestatus:function()
      {
                this.setState({status:true});//changing state
      },
        saveit:function(e){
              this.setState({batchtype: e.target.value});//setting the state fo batch type
              console.log(this.state.batchtype);
        },
              update:function(arg1,arg2,arg3,arg4){
                console.log('coming in');
                              var jsondata={
                                        batchname:this.state.batchname,
                                        batchtype:this.state.batchtype,
                                        location:arg1,
                                        start_date:arg2,
                                        end_date:arg3,
                                        participants:arg4
                              };
                                $.ajax({
                                      url: 'http://localhost:8080/batch/add',//Ajax call to save favourite movies in the data
                                      type: 'POST',
                                      cache: false,
                                      data: jsondata,
                                      success: function(d) {
                                        console.log("success");
                                      alert("saved to database as");
                                      }.bind(this),
                                      error: function(xhr, status, err) {
                                      console.error(this.props.url, status, err.toString());
                                      }.bind(this)
                                      });
            },
         render:function(){

                return(<div className="row">
                             <div className="col-md-12">
                             <h3>
                              Enter the Batch Details
                             </h3>
                               <form role="form">
                                 <div className="form-group">

                                   <label for="batchname">
                                     Batch Name:
                                   </label>
                                   <input type="text" value={this.state.batchname} onChange={this.save} className="form-control" id="batchname" />
                                 </div>
                                 <div className="form-group">

                                   <label for="batchtype">
                                     Batch Type:
                                   </label>
                                   <input type="password"  value={this.state.batchtype} onChange={this.saveit}  className="form-control" id="batchtype" />
                                 </div>
                                 <input type="button" value="For More Details"  className="btn btn-primary btn-medium" data-toggle="modal" data-target="#myModal" onClick={this.changestatus}/>
                                 {this.state.status?<Modal  update={this.update} batchname={this.state.batchname} batchtype={this.state.batchtype}></Modal>:null}
                               </form>
                             </div>
                            </div>)
          }
      })

module.exports=Batchdetails;
