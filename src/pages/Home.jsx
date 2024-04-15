import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import  axios  from 'axios'


export default function Home() {
    const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products/")
      .then((result) => {
        // console.log(result);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(products);
  // calling api function

  useEffect(() => {
    getProducts();
  }, []);
  

  return (
    <>
    <div >
         <div className="header">
        
        <h1 className="first-head">Welcome Ebong_Chris</h1>
        <Link to={"/login"}>
          <button className="login">Login</button>
        </Link>
      </div>

    </div>

<div className="cards">
{products.map((product) => (
  <div className="card" key={product.id}>
    <img className="images" src={product.image} alt="" width="100%" />
    <h2>{product.price}</h2>
    <p>{product.title.slice(0,30)}</p>
    <Link to={`/products/${product.id}`}>
      <button className="button">Get Details</button>
    </Link>
  </div>
))}
</div>
</>
  );
  
}
