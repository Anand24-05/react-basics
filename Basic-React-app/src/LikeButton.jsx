import { useState } from "react"
export default function LikeButton() {

    let[isLiked, setLike] = useState(false);//state

    let liked = () =>{
       
        setLike(!isLiked)
    }

    let newStyle = {
        color: "red"
    }
    return(
      <div>
        <p onClick={liked}>
            {isLiked ? (<i className="fa-solid fa-heart" style={newStyle}></i>):(<i className="fa-regular fa-heart"></i>)}
        </p>
      </div>
    )
}
/*
in the above component we have created a function
Liked this function is responsible for the updation of the updater function
that is the setLike which will be responsible for the change in variable "isLike"

PTN: we cannont use hooks outside of the component
and also can can create multiple state in the components
*/