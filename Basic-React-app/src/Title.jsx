function Title(){
    let name = "title";
    return (
        <div> 
            <h1>Hello i am title</h1>
            <h2>Name is {name}</h2> {/* the code in the {} is the pure javascript and we can use it anywhere in the function */}
        </div>
       
    );
};

export default Title;

/* import Name from "path or location"
in the import try to use name of the component as first letter Caps 

types of export
1. Default export
ex : export default Title(Name of the function)

2. Named export
ex : export {Title};

to use named export we have to use following way to import
import {Title} from "./Title.jsx" 

*/