var React=require('react');
var {Link}=require('react-router');
var NavLink=require('./NavLink.js');

var Navbar=React.createClass(
      {

         render:function(){

                return(
                  <div className="container-fluid" id="cont">
                  	<div className="row">
                  		<div className="col-md-12">
                  			<ul className="nav nav-tabs">
                  				<li>
                  					<NavLink to="/home">Home</NavLink>
                  				</li>
                  				<li>
                  					<NavLink to="/batch_details">Batch Details</NavLink>
                  				</li>
                  				<li>
                  					<Link to="/show_batches" >Show Batches</Link>
                  				</li>
                          <li>
                            <Link  to="/about/mean">About MEAN</Link>
                          </li>
                          <li>
                            <Link to="/about/mern">About MERN</Link>
                          </li>

                  			</ul>
                  		</div>
                  	</div>
                  </div>
                )
          }
      })

module.exports=Navbar;
