/*
* @Author: Canvas
* @Date:   2018-01-26 13:45:45
* @Last Modified by:   Canvas
* @Last Modified time: 2018-01-26 13:56:28
*/
import React        from 'react';
import { Link }     from 'react-router-dom';
import PageTitle    from 'component/page-title/index.jsx';
import Pagination   from 'util/pagination/index.jsx';
import Product      from 'service/product-service.jsx';
import TableList   from 'util/table-list/index.jsx';
const _product      = new Product();
class ProductList extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            list            : [],
            pageNum         : 1,
            listType        : 'list'
        };
    }
    componentDidMount(){
        this.loadProductList();
    }
    // 加载商品列表
    loadProductList(){
        debugger;
        let listParam = {};
        listParam.listType = this.state.listType;
        listParam.pageNum  = this.state.pageNum;
        // 如果是搜索的话，需要传入搜索类型和搜索关键字
        if(this.state.listType === 'search'){
            listParam.searchType = this.state.searchType;
            listParam.keyword    = this.state.searchKeyword;
        }
        // 请求接口
        _product.getProductList(listParam).then(res => {
            this.setState(res);
        }, errMsg => {
            this.setState({
                list : []
            });
            _mm.errorTips(errMsg);
        });
    }
    // 页数发生变化的时候
    onPageNumChange(pageNum){
        this.setState({
            pageNum : pageNum
        }, () => {
            this.loadProductList();
        });
    }
    render(){
       let listBody=this.state.list.map((pro,index)=>{
            return (
                <tr key={index}>
                    <td>{pro.id}</td>
                    <td>{pro.name}<br/>{pro.subtitle}</td>
                    <td>{pro.price}</td>
                    <td>{pro.status}</td>
                    <td>
                        <a className='opear'>查看 </a>

                        <a className='opear'> 编辑</a>
                    </td>
                </tr>
                )
            })
        return (
            <div id="page-wrapper">
                <PageTitle title="商品列表"/>
                <TableList tableHeads={['ID', '信息', '价格', '状态', '操作']}>
                    {listBody}
                </TableList>
                <Pagination current={this.state.pageNum} 
                    total={this.state.total} 
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
            </div>
        );
    }
}

export default ProductList;