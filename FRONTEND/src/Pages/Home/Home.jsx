import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom';

const Home = () => {
    const [product, setProduct] = useState({});
    useEffect(()=>{
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setProduct(data));
    },[])
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <div>
        {product.map(
          <div className="cards" key={x.id}>
            <div className="image">
              <img src={x.img} alt="" />
            </div>
            <div className="text">
              <h5>{x.name}</h5>
              <p>{x.price}</p>
            </div>
            <Link to={`detail/${x.id}`}>
              <button>detail</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Home