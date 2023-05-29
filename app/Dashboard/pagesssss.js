"use client"
import handler from '@/pages/api/checkout_sessions';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {

  const [orders, setOrders] = useState([]);

  const handelClick = (({order}) => {
    const encodedParams = new URLSearchParams();

    encodedParams.set("key", "pYniZBZci6DcIkye31Eyjy5Sz2wgBvJ7");
    encodedParams.set("action", "add");
    encodedParams.set("service",order.service );
    encodedParams.set("link", order.link);
    encodedParams.set("quantity", order.quantity);

    let url = "https://ad4tube.com/api/v2?";

    const res = fetch(url ,{mode: 'no-cors'} , options)
    .then(response => {
      // Handle the response here
      console.log(response);
    })
    .catch(error => {
      // Handle errors here
      console.error(error);
    });

    
  })

  useEffect(()=>{
    const Balance = (() => {
      const encodedParams = new URLSearchParams();
  
      encodedParams.set("key", "M9w1R4UkS4D3CKlBZlrH2lfwKacLmKG3");
      encodedParams.set("action", "balance");
  
      let url = "https://app.ad4tube.com/api/v2";
  
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedParams,
      };
      
      const res = fetch(url ,{mode: 'no-cors'} , options)
      .then(response => {
        // Handle the response here
        console.log(response);
      })
      .catch(error => {
        // Handle errors here
        console.error(error);
      });

      
    })
    Balance()
  }, [])

  useEffect(() => {
    async function getCategory() {
      const res = await fetch('http://127.0.0.1:3001/api/order');
      const data = await res.json();
      setOrders(data);
    }
    getCategory();
  }, []);

  return (
    <>
      <h1>Orders</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" >Username & service</th>
            <th scope="col">Service Number </th>
            <th scope="col">Quantity</th>
            <th scope="col">Link</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {
            orders?.map((order, index) => {
              return (
                <tr key={index}>
                  <td scope="row" >{order.name}</td>
                  <td>{order.service}</td>
                  <td>{order.quantity}</td>
                  <td>{order.link}</td>
                  <td>{order.price}</td>
                  <td><button > Add Order </button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Dashboard
