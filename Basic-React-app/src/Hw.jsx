import Hwprice  from "./Hwprice";

function Hw({title, feature, idx}){

    let styles = {
        color: "white", 
        hight: "100px",
        width: "100px",
        border: "solid white",
        radius: "10px",
        margin: "5px"


    }

    let oldPrice = [1248, 2586, 2456];
    let newPrice = [1100, 2400, 2300]
    return(
        <div className="hs" style={styles}>
            <h3>{title}</h3>
            <p>{feature}</p>
            <Hwprice oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}

export default Hw;