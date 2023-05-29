import React from 'react'
import { useEffect, useState } from 'react';

const SubCategoryselector = ({ activecat , setactivserv }) => {
    const [services, setServices] = useState([]);
    const [newserv, setnewserv] = useState([]);
   
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
    };
    useEffect(() => {
        const array = [];
        const filtred = services.filter((serv) => {
            
            if (serv?.SubCategoryID?.categorieID === activecat) {
                array.push(serv);
                return array
            }
        });

        setnewserv(filtred)
    }, [activecat]);

    
    return (
        <select required className="form-select"  onChange={(e)=>{setactivserv(e.target.value);}} >
                <option disabled > select Service</option>
                {newserv
                    .map((service) => {
                        return <option value={service._id}>{service.service} - {service.name} - {(service.rate).toFixed(2)}$ </option>
                        
                    })
                }
            
        </select>
    )
}

export default SubCategoryselector