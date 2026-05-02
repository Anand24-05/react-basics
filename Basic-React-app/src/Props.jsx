import Prop from "./Prop";
function Props() {
    let options = ["hitech", "durable", "best" ];

    return(
        <div>
            <Prop title="phone" price={12000} features= {options}/>
            <Prop title="phone" price={12000} features= {options}/>
            <Prop title="phone" price={12000} features= {options}/>
        </div>
    )
}
export default Props