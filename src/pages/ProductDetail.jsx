import React, { useState,useEffect } from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductService from "../services/productService";


export default function ProductDetail() {
  let {id} = useParams()
  
  const [product, setproduct] =  useState({});
  useEffect(()=>{
  let productService = new ProductService()
  productService.getByProductId(id).then(result=>setproduct(result.data))
  },[])
  
  return (
    <div>

    <Card fluid>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <CardHeader>{product.productName}</CardHeader>
        <CardMeta>{product.categoryId}</CardMeta>
        <CardDescription>
          Molly wants to add you to the group <strong>musicians</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
 

  

    </div>
  );
}
