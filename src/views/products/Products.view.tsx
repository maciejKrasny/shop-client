import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as shopActions from "../../store/shop.actions";
import { ProductProps } from "../../store/types";
import ProductCard from "../../components/productCard/ProductCard";
import { Content, ProductsRow } from "./Products.styled";

function chunkArray(myArray: any[], chunkSize: number) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    const chuck = myArray.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(chuck);
  }

  return tempArray;
}

const Products: React.FC<{}> = () => {
  const products = useSelector((state: any) => state.shop.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopActions.loadProducts());
  }, [dispatch]);

  const upproducts = [...products, ...products, ...products, ...products, ...products, ...products, ...products, ...products];
  const chunkProducts = chunkArray(upproducts, 3);
  const productsElement = chunkProducts.map((chunk: ProductProps[]) => (
    <ProductsRow>
      {chunk.map((product: ProductProps) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageURL={product.imageURL}
        />
      ))}
    </ProductsRow>
  ))
  return (
    <Content>
      {productsElement}
    </Content>
  )
    ;
};

export default Products;
