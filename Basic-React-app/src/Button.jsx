function printHello(){
    console.log("Hello ");
}
function printHello1(){
    console.log("Hello  Hello");
}
function printHello2(){
    console.log("Hello you entered into button ");
}
function printHello3(){
    console.log("you leave the enter button ");
}
function printHello4(){
    console.log("Hello ");
}
function printHello5(){
    console.log("Hello ");
}


export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me</button> {/* in this we are assinging
             the printHellow to the Onclick, here printHello is a function*/}
            <button onDoubleClick={printHello1}>Double click me</button>
            <button onMouseEnter={printHello2} onMouseLeave={printHello3}>enter</button>
            <button >Click me</button>
            <button onClick={printHello4}>Click me</button>
            <button onClick={printHello5}>Click me</button>

            
        </div>
    )
}