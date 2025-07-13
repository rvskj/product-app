import ProductSearch from './ProductSearch';
import ProductList, { TopHeader } from './ProductList';
import { useState } from 'react';

const ProductHome = () => {
    const [data, setData] = useState([])
    return (
        <div className="container" style={{ border: '1px solid #cecece', padding: '10px', width: '800px', backgroundColor: '#e4f1f3ff' }}  >
            <ProductSearch setData={setData} />
            <TopHeader />
            <ProductList data={data} />
        </div>
    );
};

export default ProductHome;