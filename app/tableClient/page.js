import React from "react";
import dynamic from 'next/dynamic'
const AffTableUsers = dynamic(() =>
    import('@/components/affTableUsers'), {
    loading: () => 'Loading...', ssr: false,
})
async function getProducts() {
    const res = await fetch('http://127.0.0.1:3001/api/SubCategorys')
    const categories = await res.json();
    return categories;
}
const tableCategories = async () => {
    const categories = await getProducts();
    return (
        <div className="container mx-auto shadow p-4">
            <AffTableUsers categories={categories} />
        </div>
    )
}
export default tableCategories;