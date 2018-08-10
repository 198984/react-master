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
				component: path.resolve(__dirname,'src/component')
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
 			}
	   		// contentBase: './dist'
	  	}

		
}