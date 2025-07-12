const DataHeader = ({ category }) => {
    return <div className="row" style={{ border: '1px solid blue' }}>
        <div className="col-sm-12">{category}</div>
    </div>
}
const DataRow = ({ product }) => {
    return <div className="row" style={{ border: '1px solid green' }}>
        <div className="col-sm-6">{product.name}</div>
        <div className="col-sm-6">{product.price}</div>
    </div>
}

const ProductList = ({ data }) => {
    return (
        <div>
            {data.map(g => {
                return <div key={g.category}>
                    <DataHeader category={g.category} key={g.category} />
                    {g.products.map(p => <DataRow product={p} key={p.name} />)}
                </div>
            })}
        </div>
    );
};

export default ProductList;