import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was Clicked!!!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("  Converted to Upper Case", 'success');
  };
  const handleLowClick = () => {
    //console.log("UpperCase was Clicked!!!" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("  Converted to Lower Case", 'success');
  };
  const handleOnChange = (event) => {
    //console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //setText = "";
  return (
    <>
    <div className="container" style={{backgroundColor:props.mode==='light'?'white':'grey'}}> 
      <h1 >{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} style={{backgroundColor:props.mode==='light'?'white':'grey'}}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      
      <button className="btn btn-primary" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      
    </div>
    <div className="container  my -6" style={{backgroundColor:props.mode==='light'?'white':'grey'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length}   and {text.length}</p>
        <p>{0.08 * text.split(" ").length}  Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the Text Box to Preview it Here!!"}</p>

    </div>
    </>
  );
}
