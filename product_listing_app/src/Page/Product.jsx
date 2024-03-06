import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleProduct from '../Components/SingleProduct';
import styles from "./product.module.css"

const Product = () => {
    const [products ,setProducts]= useState([]);
    
    const fetchData = async()=>{
        try{
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data)
        }catch(err){
            console.log(err,"err")
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(products)
  return (
    <div className={styles.container}>
        {
            products?.length >0 && products?.map((item)=>{
                return <SingleProduct key={item.id} {...item}/>
            })
        }
      
    </div>
  )
}

export default Product
