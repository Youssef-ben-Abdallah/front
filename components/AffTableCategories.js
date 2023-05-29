"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import UpdateCategory from './updateCategory';
import AjoutCategorie from './ajoutCategories';
const affTableCategories = (props) => {
    const [categories, setCategories] = React.useState(props.categories)
    const getCategories = async () => {
        const res = await fetch('http://127.0.0.1:3001/api/SubCategorys')
        const categories = await res.json();
        setCategories(categories)
    }
    React.useEffect(() => {
        getCategories();
    }, [categories]);
    const handleDelete = async (id) => {
        if (window.confirm("supprimer la catégorie O/N")) {
            console.log(id)
            const res = await (await
                fetch('http://127.0.0.1:3001/api/SubCategorys/' + id, {
                    method: "DELETE"
                })).json();
            if (res) {
                const newCategories = categories.filter((item) => item.id !== id);
                setCategories(newCategories);
            } else {
                console.log(res);
            }
        }
    }
    const columns = [
        {
            label: "Name",
            name: "nomSubCategory"
        },
        {
            name: "_id",
            label: "Actions",
            options: {
                customBodyRender: (value,tableMeta) => (
                    <div>
                        <UpdateCategory categories={categories[tableMeta.rowIndex]}/>
                        
                       
                        <span
                            onClick={(e) => 
                                handleDelete(value)}
                            style={{ cursor: 'pointer' }}
                        >
                            <DeleteForeverRoundedIcon color='error' />
                        </span>
                    </div>
                )
            }
        }
    ];
    return (
        <>
        <AjoutCategorie />
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
export default affTableCategories;