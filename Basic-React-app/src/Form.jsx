function Submit(event){ {/*here event is a parameter in the event object*/}
    event.preventDefault();    
alert("form was submitted");
}

function Submit1(event){ {/*here event is a parameter in the event object*/}
    event.preventDefault();    
    console.log("form was submitted");
}


export default function Form() {
    return(
        <form onSubmit={Submit}>
            <input placeholder="Write something" />
            {/* <button onClick={Submit1}>Submit</button>  
             if we use this by default this will be prioriotized*/}
            <button>Submit</button> 
        </form>
    )
}