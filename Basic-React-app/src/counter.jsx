 import { useState } from "react"; //import hook from the react
function Counter(){
    // let count = 0;

    // function incCount(){
    //     count ++;
    // }

const [count, setCount] = useState(0); //defined the useState

 let incCount = () =>{
    setCount(count +1);
//in this function we have used setCount method to update the count variable
}

return(
    <>
    <h1>State in react</h1>
    <h3>count = {count}</h3>
    <button onClick={incCount}>Increase count</button> {/*here incCount method will be used to triger setCount method*/}
    </>
)
}
export default Counter;