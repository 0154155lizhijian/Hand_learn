import React, { Component } from 'react'
import { connect } from 'dva';
import ShopList from '../components/ShopList'

class Shop extends Component {
    constructor(props){
        super(props)
    }
   handleDelete(key) {
    this.props.dispatch({
      type: 'shop/delete',
      params: key,
    });
}
render(){
    return (
        <div>
          <h2>welcome to my Store</h2> 
          <ShopList shopLists={this.props.shop} onDelete={this.handleDelete.bind(this)}/>
        </div>
      );
}

  }

// export default Products;
export default connect(({shop})=>({
    shop,
}))(Shop);




