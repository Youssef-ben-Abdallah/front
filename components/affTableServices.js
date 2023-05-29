"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
const affTableServices = ({ products }) => {
    const columns = [
       
        {
            label: "Name",
            name: "name"
        },
        {
            label: "Rate",
            name: "rate"
        },
        {
            label: "Description",
            name: "desc"
        }
    ];
    return (
        <>
            {products && products?.length > 0 ?
                <MUIDataTable
                    title="Products List"
                    data={products}
                    columns={columns}
                />
                : null}
        </>
    )
}
export default affTableServices;