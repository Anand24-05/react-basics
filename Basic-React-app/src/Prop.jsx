function Prop({title, price, features})//here in the {} we have send the props to the function
 {
    const list = features.map((feature) =><li>{feature}</li>) //this will conver array element into list tab
    
    return(
<div className="Prop" >
    <h2>{title}</h2>
    <h3>Price : {price}</h3>
    {/* <p>{features}</p> instead of this we will use */}
    <ul>{list}</ul>
</div>
    )
}

export default Prop;