//Text Copy


import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase Was Clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick =()=>{
        // console.log("Uppercase Was Clicked");
        let newText=text.toLowerCase();
        setText(newText);
    } 

    const handleOnChange =(event)=>{
        // console.log("On Changed");
        setText(event.target.value);
    }

    const handleclear =(event)=>{
        // console.log("On Changed");
        setText("");
    }

  const [text, setText] = useState("");
    //text="new text"; wrong way to change the state
    //setText("Correct way"); correct way to change the statr
  return (
    <>
    
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <h1>Enter Text Here:</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclear}>clear</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary :</h2>
        <p>Words={text.split(" ").length} and Chars={text.length}</p>
        <p>{0.008 * text.split(" ").length}minutes Required to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
