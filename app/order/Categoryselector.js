import React from 'react'
import { useEffect, useState } from 'react';
const Categoryselector = ({ setactivecat }) => {
    const [categorys, setCategorys] = useState([]);


    async function getCategory() {
        const res = await fetch('http://127.0.0.1:3001/api/Categorys');
        const data = await res.json();
        return data;
    }

    useEffect(() => {
        async function fetchData() {
            const categorysData = await getCategory();
            setCategorys(categorysData);
        }
        fetchData();
    }, []);

    return (
        
        <select  required className="form-select" onChange={(es)=>setactivecat(es.target.value)} >
            <option disabled > select category</option>
            {categorys.map((category) => (
                <option value={category._id}>
                    {category.nomCategory}
                </option>
            ))}
        </select>
        
    )
}

export default Categoryselector