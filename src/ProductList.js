import React from 'react'
import { useFilterContext } from './context/FilterContext'
import GridView from './components/GridView';
import ListView from './components/ListView';
const ProductList = () => {
 
  const { filter_products, grid_view } = useFilterContext();
  // console.log(filter_products);
  if (grid_view === true) {
    return <GridView products={filter_products} />;}
     if(grid_view===false){
        return <ListView products={filter_products}/>
      }
     return (
    <div>ProductList</div>
  )
}

export default ProductList;
