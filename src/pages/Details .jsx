import React, { useEffect, useState } from 'react'
import{ useParams} from 'react-router-dom'
import  axios  from 'axios';

export default function Details() {
    const {id} = useParams()
    const [product,setProduct] = useState({});

    const getProduct =async()=>{
        await axios.get(`https://fakestoreapi.com/products/${id}`).then(result=>{
          // console.log(result);
          setProduct(result.data)
        }).catch(err=>{console.log(err);});
  }

  useEffect(() =>{
    getProduct();
 },[])

  return (
    <div>
         <img src={product.image} alt="" width="50%" />
         <h2>{product.price} XAF</h2>
        <h1>Product {id}</h1>
        <p>{product.title}</p>
    </div>
  )
}
