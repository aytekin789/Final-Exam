import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {detail, setDetail} = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:3000/${id}`)
          .then((res) => res.json())
          .then((data) => setDetail(data));
    },[])
  return (<>
  <Helmet> <title>DETAIL</title></Helmet>
    <div>Detail</div>
    <div>
        <div className="image"><img src={detail.img} alt="" /></div>
        <div className="text">
            <h1>{detail.name}</h1>
            <h4>{detail.price}</h4>
        </div>
    </div>
  </>
  )
}

export default Detail