"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
function useServiceDetails(id) {
    const [service, setService] = useState(null);
    const [subcategory, setSubcategory] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const serviceRes = await fetch(`http://127.0.0.1:3001/api/services/${id}`);
                const serviceData = await serviceRes.json();
                setService(serviceData);

                const subcategoryRes = await fetch(`http://127.0.0.1:3001/api/subcategorys/${serviceData.SubCategoryID}`);
                const subcategoryData = await subcategoryRes.json();
                setSubcategory(subcategoryData);

                const categoryRes = await fetch(`http://localhost:3001/api/categorys/${subcategoryData.categorieID}`);
                const categoryData = await categoryRes.json();
                setCategory(categoryData);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [id]);

    return [service, subcategory, category];
}

function ServiceDetails({ params }) {
    const [service, subcategory, category] = useServiceDetails(params.id);

    if (!service || !subcategory || !category) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-5">
                    <img src={category.imageCategory} alt={category.imageCategory} />
                </div>
                <div className="col-6 mt-5">
                    <h2 class="text-center">{subcategory.nomSubCategory}</h2>
                    <br/>
                    <h6 class="text-center">{service.name}</h6>
                    <center ><p style={{ "color": "purple" , "fontWeight": "bold" }} >Rate : </p></center>
                    <p class="text-center">{service.rate}</p>
                    <center><p style={{ "color": "purple" , "fontWeight": "bold" }}>Min : </p></center>
                    <p class="text-center">{service.min}</p>
                    <center><p style={{ "color": "purple" , "fontWeight": "bold" }}>Max : </p></center>
                    <p class="text-center">{service.max}</p>
                    <center><p style={{ "color": "purple" , "fontWeight": "bold" }} >Description : </p></center>
                    <p class="text-center">{service.desc}</p>
                    <br/>
                    <center>
                        <Link href={`/order`}>
                            <Button style={{ "background": "purple" , "color" : "white"}} > Order </Button>
                        </Link>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetails;
