import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const AdminProduct = () => {
    const [addproduct, setAddproduct]= useState({});
    useEffect(()=>{
        fetch("http://localhost:3000/")
        .then((res)=>res.json())
        .then((data)=>setAddproduct(data))
    },[])

  return (
    <>
      <Helmet>
        <title>ADMIN</title>
      </Helmet>
      <table>
        <thead>
          <tr>
            <th>PHOTO</th>
            <th>NAME</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {addproduct.map(
            <tr key={x.id}>
              <td><img src={x.img} alt="" /></td>
              <td>{x.name}</td>
              <td>{x.price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default AdminProduct