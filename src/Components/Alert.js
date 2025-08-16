import React from 'react'

function Alert(props) {

    //capital the 1st letter of success create a function 
const capitalize = (word)=>{
const lower = word.toLowerCase(); //toLowerCase is a method in JS
return lower.charAt(0).toUpperCase() + lower.slice();//means convert 1st letter to uppercase and lower.slice this will take all the characters except the first character
}
return (
//when we use and operator if props.alert is null the code after and operator also null and if props.null is not null then the code after and operator also not null 
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{capitalize (props.alert.type)}</strong>{props.alert.msg}
{/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */} {/*bcz we want alert dismiss after 2s and use setTiimeout in conat show alert functionin app.js*/}
</div>

)
}

export default Alert
