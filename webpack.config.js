var path	=require('path');
const webpack =require('webpack');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
		entry: {
		    app: './src/app.jsx',
		  },
		output: {
			 path: path.resolve(__dirname,'dist'),
			 publicPath:'/dist/',
		     filename: 'js/app.js'
		},
		resolve:{
			alias:{
				page: path.resolve(__dirname,'src/page'),
				component: path.resolve(__dirname,'src/component'),
				util: path.resolve(__dirname,'src/util'),
				service: path.resolve(__dirname,'src/service')
			}
			
		},
		module: {
		  	rules: [
		  			// JSX配置
			    {
				    test: /\.jsx$/,
				    exclude: /(node_modules|bower_components)/,
				    use: {
					    loader: 'babel-loader',
					        options: {
					        	presets: ['env','react']
					        }
				    	}
			    	},
			    	// css配置
			      	{
				        test: /\.css$/,
				        use: ExtractTextPlugin.extract({
				          fallback: "style-loader",
				          use: "css-loader"
				        })
				    },
				    // sass配置
				    {
				        test: /\.scss$/,
				        use: ExtractTextPlugin.extract({
				          fallback: "style-loader",
				          use: ["css-loader","sass-loader"]
				        })
				    },
				    // 图片配置
				    {
			        test: /\.(png|jpg|gif)$/i,
			        use: [
				         {
				         loader: 'url-loader',
				         	options: {
				              limit: 8192,
				              name:'resource/[name].[ext]'
				            }
				          }
			        ]
			      },
			      {
			        test: /\.(woff|woff2|otf|eot|svg|ttf)$/i,
			        use: [
				         {
				         loader: 'url-loader',
				         	options: {
				              limit: 8192,
				              name:'resource/[name].[ext]'
				            }
				          }
			        ]
			      }
		  ]
		},
	 	plugins: [
			 // 处理html文件
			 new HtmlWebpackPlugin(
				 {
				 	template:'./src/index.html',
					favicon:'./favicon.ico'
				 }),
			 //独立css文件
			 new ExtractTextPlugin("css/main.css"),
			 //提出公共模块
			 new webpack.optimize.CommonsChunkPlugin({
			 	name:'common',
			 	filename:'js/base.js'
			 })
	 	],
 		devServer: {
 			port:8086,
 			historyApiFallback:{
 				index:'/dist/index.html'
 			},
 			//代理
 			proxy:{
 				'/manage' :{
 					target:'http://admintest.happymmall.com',
 					changeOrigin:true//指定服务器路径是上面的路径
 				},
 				'/user/logout.do' : {
	                target: 'http://admintest.happymmall.com',
	                changeOrigin : true
            	}
 			}

	  	}

		
}