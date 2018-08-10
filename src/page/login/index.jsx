/*
* @Author: Canvas
* @Date:   2018-08-25 17:37:22
*/
import React        from 'react';
import MUtil        from 'util/mm.jsx'
import User         from 'service/user-service.jsx'

const _mm   = new MUtil();
const _user = new User();

import './index.scss';

class Login extends React.Component{
    constructor(props){
        super(props);
		this.state={
			username:'',
			password:'',
			redirect:_mm.getUrlParam('redirect') || ''
		}
    }
    //监听用户输入
    onInputChange(e){
    	let inputValue =e.target.value,
    		inputName=e.target.name;
    	this.setState({
    		[inputName]:inputValue
    	})
    }
    onSubmit(){
    	_user.login({
    		username:this.state.username,
    		password:this.state.password
    	}).then((res)=>{
    			this.props.history.push(this.props.redirect)
    	},(errMsg)=>{
    		_mm.errorTips(errMsg);
    	})
    }
    render(){
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="请输入用户名" 
                                   onChange={(e)=>{this.onInputChange(e)}}
                                   />
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="请输入密码" 
                                   onChange={(e)=>{this.onInputChange(e)}}
                                   />
                            </div>
                            <button type='button' className="btn btn-lg btn-primary btn-block"
                              onClick={()=>{this.onSubmit()}}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
                    
        );
    }
}

export default Login;