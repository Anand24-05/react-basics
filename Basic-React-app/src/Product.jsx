import "./Product.css";
function Product({title}) {
    
    return(
        <div className="Product">
            <h3>product title</h3>
            <h1>{title}</h1>{/* this is the prop used in the component*/}
            <h2>product description</h2>
        </div>
    )
}

export default Product;