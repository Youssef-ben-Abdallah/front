"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
const affTableUsers = (props) => {
    const [categories, setCategories] = React.useState(props.categories)
    const getCategories = async () => {
        const res = await fetch('http://127.0.0.1:3001/api/user')
        const categories = await res.json();
        setCategories(categories)
    }
    React.useEffect(() => {
        getCategories();
    }, [categories]);

    const columns = [
        {
            label: "Name",
            name: "name"
        },
        {
            label: "adress",
            name: "adress"
        },
        {
            label: "email",
            name: "email"
        },
        {
            label: "Role",
            name: "role",
            options: {
                customBodyRender: (rowdata) => {
                    if (rowdata == 0) {
                        return ('User')
                    } else {
                        return ('Admin')
                    }
                }
            }
        },
    ];
    return (
        <>
            {categories && categories?.length > 0 ?
                <MUIDataTable
                    title="Categories List"
                    data={categories}
                    columns={columns}
                />
                : null}
        </>
    )
}
export default affTableUsers;