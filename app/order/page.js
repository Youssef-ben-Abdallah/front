"use client"
import React, { useState, useEffect } from 'react';
import Categoryselector from './Categoryselector';
import SubCategoryselector from './SubCategoryselector';
import { useSession } from 'next-auth/react';
import axios from "axios";

const ServicesPages = () => {
  const [activecat, setactivecat] = useState(0);
  const [activserv, setactivserv] = useState(0);
  const [services, setServices] = useState([]);
  const [quantitys, setquantity] = useState(0);
  const { data } = useSession();
  const [status, setStatus] = useState("idle");


  async function handleClick(e) {
    const fulldata = new FormData(e.target)
    const item = Object.fromEntries(fulldata.entries())
    e.preventDefault();

    if (item?.price.length > 0) {
      setStatus("loading")
      console.log(status)

      axios.post('api/checkout_sessions', {
        name: item.name,
        link: item.link,
        price: item.price,
        quantity: item.quantity,
        service: item.service
      })
        .then(res => {
          console.log(res);
          window.location = res.data.sessionURL;
        })
        .catch(err => { console.log(err); setStatus("redirect-error"); })

    } else {
      setStatus("no-items");
    }

  }


  const handleChange = (event) => {
    setquantity(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const servicesData = await getServices();
      setServices(servicesData);
    }

    fetchData();
  }, []);


  async function getServices() {
    const res = await fetch('http://127.0.0.1:3001/api/services');
    const services = await res.json();
    return services;
  }
  useEffect(() => {
    const array = [];
    const filtred = services.filter((serv) => {

      if (serv._id === activserv) {
        array.push(serv);
        return array
      }
    });
    setactivserv(filtred)

  }, []);

  const usedserv = [];


  return (

    <div style={{ width: "110%" }}>
      <div className="row">

        <div className="contact-us section" id="contact">
          <center>
            <form style={{ width: "30%" }} onSubmit={handleClick} id="contact-form" >
              <div class="col-lg-12">
                <div class="section-heading">
                  <h2><em>Order </em> Your Service <span>Now</span></h2>
                </div>
              </div>
              <div id="contact-form" className="form-group">
                <label htmlFor="Category">Category</label>
                <Categoryselector setactivecat={setactivecat} />
              </div>
              <div className="form-group">
                <label htmlFor="Service">Order Service</label>
                <SubCategoryselector activecat={activecat} setactivserv={setactivserv} />
              </div>
              {
                services?.filter((usederv) => {
                  if (usederv._id === activserv) {
                    usedserv.push(usederv)
                  }
                })
              }
              {/* service for form */}
              <input name='service' type="hidden" value={usedserv.map((serv) => { return serv.service })} />
              {/* username for form */}
              <input name='name' type="hidden" value={usedserv.map((serv) => { return data?.user?.name + "--" + serv.name })} />
              <div className="form-group">
                <label htmlFor="Link">Link</label>
                {/* link for form */}
                <input type='url' name='link' className="form-control" placeholder='https://' />
              </div>
              {usedserv.map((Userv) => {
                return (
                  <>
                    <div className="form-group">
                      <label htmlFor="Quantity" >Quantity</label>
                      {/* Quantity for form */}
                      <input name='quantity' type="number" onChange={handleChange} max={Userv.max} min={Userv.min} className="form-control" />
                      <br />
                      <span> Min / Max Order : {Userv.min}/{Userv.max}</span>
                      <br />

                    </div>
                    <div className="form-group">
                      {/* Quantity for form */}
                      <input style={{ width: "50%" }} value={
                        (Userv.rate * quantitys).toFixed(3)
                      } name='price' className="form-control" readOnly />
                    </div>
                    <div className="form-group" id="contact-form" >
                      <label htmlFor="desc" >description</label>
                      <textarea  value={Userv.desc} contenteditable="false" className="form-control" rows="4" cols="50" /> 
                    </div>
                  </>
                )
              })}
              <br />
              <button type="submit" className="btn btn-primary"> {status !== "loading" ? "Place Order" : "Loading..."}</button>
            </form>
          </center>

        </div>

      </div>
    </div>

  );
}

export default ServicesPages;
