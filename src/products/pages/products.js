import React, {useEffect, useState} from "react";
import ProductList from "../components/ProductList";
import {useHttpClient} from "../../shared/hooks/http-hook";

const Products = props =>{
    const [loadedProducts, setLoadedProducts] = useState([])

    const {isLoading, error, sendRequest} = useHttpClient()

    useEffect(()=>{
        const fetchProducts = async () =>{
            try {
                const responseData = await sendRequest('http://localhost:5000/api/products')
                setLoadedProducts(responseData.products)
            }catch (err) {
            }
        }
        fetchProducts()
    },[sendRequest])
    return (
        <React.Fragment>
            {!isLoading && loadedProducts && <ProductList products={loadedProducts}/>}
        </React.Fragment>
    )

}

export default Products
