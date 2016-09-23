var React=require('react');
var ReactDOM=require('react-dom');
var Batchdetails=require('./component/Batchdetails.js');
var Navbar=require('./component/Navbar.js');
var Showbatch=require('./component/Showbatch.js');
var Home=require('./component/Home.js');
var About=require('./component/About.js');
var {hashHistory,Route,Router,IndexRoute}=require('react-router');
var Batchzone=React.createClass(
      {

         render:function(){

                return(<div>
                        <Navbar/>

                        <br/><br/><br/>
                        {this.props.children}
                     </div>)
          }
      })

ReactDOM.render(<Router history={hashHistory}>
                    <Route path='/' component={Batchzone}>
                            <IndexRoute component={Home}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/batch_details' component={Batchdetails}/>
                            <Route path='/show_batches' component={Showbatch}/>
                            <Route path='/about/:aboutId' component={About}/>
                    </Route>

                </Router>,document.getElementById('app'));
