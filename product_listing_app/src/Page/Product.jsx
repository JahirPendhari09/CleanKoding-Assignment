import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react'
import SingleProduct from '../Components/productSection/SingleProduct';
import styles from "./product.module.css"
import Loader from '../Components/productSection/Loader';
import FilterSection from '../Components/filter/FilterSection';

const Product = () => {
    const [products ,setProducts]= useState([]);
    const [filter ,setFilter] = useState("");
    const [loading , setLoading] = useState(false)
    const handleChange =(e)=>{
        console.log(e.target.value)
      e.target.value =="select" ?setFilter(""): setFilter(e.target.value)
    }
    
    const fetchData = async()=>{
        let url ="https://fakestoreapi.com/products"
        if(filter != "")  url = url+`/category/${filter}`;
        
        try{
            setLoading(false)
            const response = await axios.get(`${url}`);
            setProducts(response.data)
        }catch(err){
            setLoading(true)
            console.log(err,"err")
        }
    }
    useEffect(()=>{
        fetchData()
    },[filter]);

    if(loading) return <Loader/>

    return (
    <Suspense  fallback={<Loader/>}>
        <FilterSection filter={filter} handleChange={handleChange}/>
        <div className={styles.container}> 
        {
            products?.length >0 && products?.map((item)=>{
                return <SingleProduct key={item.id} {...item}/>
            })
        }
        </div>
    </Suspense>
  )
}

export default Product
