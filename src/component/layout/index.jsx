import React from 'react';
import NavTop from 'component/nav-top/index.jsx';
import NavSlide from 'component/nav-slide/index.jsx';
import './index.scss' ;
import './theme.css' ;
class Layout extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			 <div id="wrapper">
				<NavTop/>
				<NavSlide/>
				 {this.props.children}
			</div>
			)
	}
}
export default Layout
