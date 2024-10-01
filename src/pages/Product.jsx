
import React, { useContext } from 'react';
import "./Css/Product.css"
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/Description/Description';
import Relatedproducts from '../components/Relatedproduct/Relatedproducts';

function Product() {
  const { all_product } = useContext(ShopContext);
  const {productId}=useParams()
  const product = all_product.find((e)=>e.id===Number(productId))
  console.log(all_product)
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className='product'>
      <hr/>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <Relatedproducts product={product}/>
      <hr/>
    </div>
  )
}

export default Product