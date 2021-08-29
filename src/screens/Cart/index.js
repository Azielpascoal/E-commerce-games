import React, { useState, useEffect } from "react";
import {
  Container,
  Top,
  ProductArea,
  ProductCard,
  ProductImage,
  ProductInfoArea,
  ProductInfoText,
  InfoText,
  CartButtom,
  CartImage,
} from "./style";
import Products from "../../services/products.json";
import { FlatList } from "react-native";
import {useCart} from "../../context/cart"
export default function Home() {
  // const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     const AllProducts = Products.map((product) => {
  //       return product;
  //     });
  //     setProducts(AllProducts);
  //     console.log("Data", AllProducts)
  //   }, [products]);
  const {add}=useCart()
  const products = Products.map((product) => {
    return product;
  });

  return (
    <Container>
      <Top>
        <InfoText>Bem vindo ao e-commerce games</InfoText>
      </Top>
      <FlatList
        data={products}
        contentContainerStyle={{
          width: "100%",
          flex: 1,
          borderTopRightRadius: 35,
          marginTop: -60,
          backgroundColor: "#fff",
          padding: "4%",
        }}
        renderItem={({ index }) => {
          return (
            <ProductCard onPress={add(index)} >
              <ProductImage source={{ uri: index.image }} />
              <ProductInfoArea>
                <ProductInfoText>Nome:{index.name}</ProductInfoText>
                <ProductInfoText>Preço:${index.price}</ProductInfoText>
                <ProductInfoText>Score:{index.score}</ProductInfoText>
              </ProductInfoArea>
            </ProductCard>
          );
        }}
        keyExtractor={(index) => index.id}
      ></FlatList>
    </Container>
  );
}
