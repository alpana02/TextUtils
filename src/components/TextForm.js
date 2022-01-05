import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared", "success");
    }
    const handleOnChange = (event)=>{
        //console.log("on change")
        setText(event.target.value)
    }
    
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className='container my-3'>
                <h1>Your text summary</h1>
                <p>Character Count: {text.length} | Word Count: {text.split(/\s+/).filter((element)=>{return element.length!=0}).length}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the TextBox to Preview it"}</p>
            </div>
        </>
    )
}
