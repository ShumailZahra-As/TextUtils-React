    import React, {useState} from 'react'

    export default function TextForm(props){
    // define handleUpclick function
    const handleUpClick =() =>{
    //console.log("Uppercase was clicked: " + text); //by using +text the text user enters also show and we see in console
    let newText = text.toUpperCase();
    setText(newText); //with 7 and 8 line when we press button the text convert into uppercase
    // setText("You have clicked on handleUpClick");
    props.showAlert("Converted to uppercae", "success");
    }
    //logic after click on Convert to Lowercase
    // define handleLoChange function
    const handleLoClick =() =>{
    let newText = text.toLowerCase();
    setText(newText);
        props.showAlert("Converted to lowercae", "success");
    }

    // define clear text function
    const handleClearClick =() =>{
    let newText = '';
    setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    //reverse
    const handleReverse = () =>{
    setText(text.split("").reverse().join(""));
    }
    const handleOnChange =(event) => //arrow function 
    {
    //by using event along with onChange function, we will set the new value equal to our text so our text which is our state will also be updated
    // console.log("On change"); //we remove console msgs or commentout to make our console clean
    setText(event.target.value);
    }

    //copy text function
    const handleCopy =() =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to Clipboard", "success");
    }

    //handle Extra Spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
            props.showAlert("Extra spaces removed", "success");
    }
    //speak function(text to speech)
    const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    }

    //cancel speech function
    const cancelSpeech=()=>{
    speechSynthesis.cancel()
    }

        const[text,  setText] = useState(' ');
    // text = "new text"; //this is a wrong way to change the state
    // setText("new text"); //correct way


    return(
    <> {/*  JS Fragment */}

    <div className="container" style= {{color: props.mode === 'dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button> 
    { /*{to make button green use success instead of primary */}
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button> 
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button> 
    <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse Text</button> 
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    <button type="submit" className="btn btn-danger mx-2" onClick={cancelSpeech}>Stop Speech</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button> 
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
</div>

    <div className="container my-3" style= {{color: props.mode === 'dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split("").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}Minutes read </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
    </div>
    </>
    );
    }
