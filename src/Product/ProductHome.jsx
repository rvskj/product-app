import ProductSearch from './ProductSearch';
import ProductList from './ProductList';
import { useState } from 'react';

const ProductHome = () => {
    const [data, setData] = useState([])
    return (
        <div className="container" style={{ border: '1px solid #cecece', padding: '10px', width:'500px' }}  >
            <ProductSearch setData={setData} />
            <ProductList data={data} />
        </div>
    );
};

export default ProductHome;