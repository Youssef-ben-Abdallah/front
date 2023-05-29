"use client"
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import './App.css';
import SideNav from '../../components/sideNav';
import Serv from '../../components/serv';


const ServicesPage = () => {

    const [services, setServices] = useState([]);
    const [filtred, setFiltred] = useState([]);
    const [activecat, setactivecat] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const servicesData = await getServices();
            setServices(servicesData);
            setFiltred(servicesData);
        }

        fetchData();
    }, []);


    async function getServices() {
        const res = await fetch('http://127.0.0.1:3001/api/services');
        const services = await res.json();
        return services;
    }



    return (
        <div >

            <SideNav service={services} setFiltred={setFiltred} activecat={activecat} setactivecat={setactivecat} />



            <div style={{ paddingLeft : "25%" }} className="d-flex flex-row" key="SubCategory">
                <motion.div
                    layout
                    className="popular-services p-2">
                    {filtred?.map((service) => {
                        return <Serv className="contact-us" key={service.service} service={service} />
                    })}
                </motion.div>
            </div>

        </div>
    );
};

export default ServicesPage;
