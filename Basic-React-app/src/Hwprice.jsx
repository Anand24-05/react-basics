function Hwprice({oldPrice, newPrice}) {
    
    let styles = {
        backgroundColor: "yellow",
        border: "black",
        color: "black"

    }
    
    return(
        <div style={styles}>
            <p>{oldPrice}</p>
            <p>{newPrice}</p>
        </div>
    )
}

export default Hwprice;