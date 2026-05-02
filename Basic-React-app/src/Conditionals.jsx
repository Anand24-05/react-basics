import Conditional from "./Conditional";
function Conditionals() {
    let options = ["hitech", "durable", "best" ];

    return(
        <div>
            <Conditional title="iPhone" price={120000} features={options}/>
            <Conditional title="Samsung" price={80000} features={options}/>
            <Conditional title="OnePlus" price={50000} features={options}/>
        </div>
    )
}
export default Conditionals