import React from 'react' 

class  PageTitle extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
				<h1 className="page-header">{this.props.title}</h1>
			)
	}

}
export default PageTitle;