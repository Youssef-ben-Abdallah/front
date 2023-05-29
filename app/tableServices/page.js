import React from "react";
import dynamic from 'next/dynamic'
const AffTableProducts = dynamic(() =>
    import('@/components/affTableServices'), {
    loading: () => 'Loading...', ssr: false,
})
async function getProducts() {
    const res = await fetch('http://127.0.0.1:3001/api/services')
    const products = await res.json();
    return products;
}
const tableServices = async () => {
    const products = await getProducts();
    return (
        <div className="container mx-auto shadow p-4">
            <AffTableProducts products={products} />
        </div>
    )
}
export default tableServices;