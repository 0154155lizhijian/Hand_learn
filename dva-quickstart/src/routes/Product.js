import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, abc }) => {
  function handleDelete(id) {
    dispatch({
      type: 'abc/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={abc} />
    </div>
  );
};

// export default Products;
export default connect(({ abc }) => ({
  abc,
}))(Products);