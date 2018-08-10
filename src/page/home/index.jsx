import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import './index.css';
class Home extends React.Component{

	componentWillMount(){
		document.title='首页'
	}
	render(){
		return (
			<div id="page-wrapper">
				<PageTitle title='首页'/>
				<div className="row">
					<div className="col-md-12">body</div>
				</div>
				{/*<button className="btn btn-default">Home</button>*/}
			</div>

			)
	}
}
export default Home