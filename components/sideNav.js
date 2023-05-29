import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";


const SideNav = ({ setactivecat, activecat, setFiltred, service }) => {
    const [categorys, setCategorys] = useState([]);
    const [subCategorys, setSubCategorys] = useState([]);
    const style = {
        fontSize: 15,
        textDecoration: "none",
        backgroundColor: "transparent",
        color: "white",
        borderColor: "transparent"
    }


    useEffect(() => {
        async function fetchData() {
            const categorysData = await getCategory();
            setCategorys(categorysData);

            const subCategorysData = await getSubCategory();
            setSubCategorys(subCategorysData);

        }

        fetchData();
    }, []);

    async function getCategory() {
        const res = await fetch('http://127.0.0.1:3001/api/Categorys');
        const data = await res.json();
        return data;
    }

    async function getSubCategory() {
        const res = await fetch('http://127.0.0.1:3001/api/SubCategorys');
        const data = await res.json();
        return data;
    }

    useEffect(() => {
        if (activecat === 0) {
            setFiltred(service)
            return;
        }
        const array = [];
        const filtred = service.filter((serv) => {
            if (serv?.SubCategoryID?._id === activecat) {
                array.push(serv);
                return array
            }
        });

        setFiltred(filtred)
    }, [activecat]);

    return (
        <div className="sidenav" key="911">
            <br></br>
            <br></br>
            <motion.div layout className="col-sm" key="Category">
                <a className={activecat === 0 ? "active" : ""} onClick={() => setactivecat(0)}> <center>All Categorys</center></a>
                <br></br>
                {categorys.map((category) => (
                    <>
                        
                            <a href="#about" onClick={() => {
                                const dropdown = document.getElementById(`dropdown-${category._id}`);
                                dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
                            }}><center>{category.nomCategory}</center></a>
                        
                        <div className='dropdown-container' key="912" id={`dropdown-${category._id}`}>

                            {subCategorys
                                .filter((subCategory) => subCategory.categorieID === category._id)
                                .map((subCategory) => (
                                    <center>
                                        <button
                                            style={style}
                                            onClick={() => setactivecat(subCategory._id)}
                                            className={activecat === subCategory._id ? "active" : ""}
                                        >
                                            {subCategory.nomSubCategory}</button>
                                    </center>
                                ))}
                        </div>
                    </>
                ))}
            </motion.div>
        </div>
    )
}

export default SideNav