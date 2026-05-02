function Conditional({ title, price, features }) {
    const list = features.map((feature, index) => 
        <li key={index}>{feature}</li>
    );

     let styles = {backgroundColor: price>85000 ? "yellow": null}
    return (
        <div className="Conditional" style={styles}>
            <h2>{title}</h2>
            <h3>Price : {price}</h3>
            <ul>{list}</ul>
            {price > 85000 ? <p>Discount of 5%</p> : null} {/* this is how we write conditionals in the react */}
        </div>
    );
}

export default Conditional;