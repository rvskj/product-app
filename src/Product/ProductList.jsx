import { cellStyle } from "./ProductUtility"
const DataHeader = ({ category }) => {
    return <i><div className="row" style={{ textAlign: "left", 'borderBottom': '1px solid green' }}>
        <div className="col-sm-12">({category})</div>
    </div></i>
}
const DataRow = ({ product }) => {
    return <div className="row">
        <div className="col-sm-7" style={cellStyle}>{product.name}</div>
        <div className="col-sm-2" style={cellStyle}>{product.price}</div>
        <div className="col-sm-3" style={cellStyle}>{product.stocked ? 'Available' : 'Not Available'}</div>
    </div>
}

export const TopHeader = () => {
    return <div className="row" style={{ border: '1px solid blue', textAlign: "left" }}>
        <div className="col-sm-7" style={cellStyle}>Name</div>
        <div className="col-sm-2" style={cellStyle}>Price</div>
        <div className="col-sm-3" style={cellStyle}>In Stock</div>
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