import React from 'react';
import {Link} from 'react-router-dom';
class NavTop extends React.Component{
	constructor(props){
		super(props)
	}
	onLogout () {
		console.log('退出登录')
	}
	render(){
		return(
				<div className="navbar navbar-default top-navbar" role="navigation">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <Link className="navbar-brand" to="/"><b>In</b>sight</Link>
		            </div>

		            <ul className="nav navbar-top-links navbar-right">
		                <li className="dropdown">
		                    <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:;" aria-expanded="false">
		                        <i className="fa fa-user fa-fw"></i> 
		                        <span>欢迎，xxx</span>
		                        <i className="fa fa-caret-down"></i>
		                    </a>
		                    <ul className="dropdown-menu dropdown-user">
		                        <li>
			                        <a onClick={()=>{this.onLogout()}}>
			                        	<i className="fa fa-sign-out fa-fw"></i> 
			                        	<span>退出登录</span>	
			                        </a>
		                        </li>
		                    </ul>
		                </li>
		            </ul>
		        </div>
			)
	}
}
export default NavTop
