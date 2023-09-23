import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    // const [selectedFont, setSelectedFont] = useState('Arial'); // Default font

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower!", "success");
    };

    const handleCleartext = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    };
    const handlecopy= ()=>{
      var text= document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // const handleFontChange = (event) => {
    //     setSelectedFont(event.target.value);
    // };

    const handleDownload = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'downloaded-text.txt';
        a.click();
        URL.revokeObjectURL(url);
        props.showAlert("Text has been Downloaded!", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    const wordCount = text.trim() === '' ? 0 : text.split(/\s+/).length;

    return (
        <>
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h1>{props.heading}</h1>

          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleCleartext}>Clear Text</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handlecopy}>Copy on clipboard</button>
          {/* <span>Change Style </span> */}
          {/* <select
            value={selectedFont}
            onChange={handleFontChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Georgia">Georgia</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Palatino Linotype">Palatino Linotype</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
          </select> */}
          
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleDownload}>
            Download Your Text
          </button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          
        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h2>Your Text Summary</h2>
          <p>{wordCount} words and {text.length} characters</p>
          <p>{wordCount === 0 ? "0" : (0.008 * wordCount).toFixed(2)} Minutes read</p>
          <h2>Preview</h2>
          {/* <div style={{ fontFamily: selectedFont }}>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</div> */}
          <div>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</div>
        </div>
        </>
    );
}











//////////////////////////////////////////////////////////////////////////////////////////////////////// OldCode

// import React,{useState} from 'react'


// export default function TextForm(props) {
//   const [text, setText] = useState('');
//   const [selectedFont, setSelectedFont] = useState('Arial'); // Default font

//   const handleUpClick = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//     props.showAlert(" Converted to Upper!","success");

//   };

//   const handleLoClick = () => {
//     let newText = text.toLowerCase();
//     setText(newText);
//     props.showAlert(" Converted to Lower!","success");
//   };

//   const handleCleartext = () => {
//     let newText = '';
//     setText(newText);
//     props.showAlert(" Text Cleared!","success");
//   };

//   const handleOnChange = (event) => {
//     setText(event.target.value);

//   };

//   const handleFontChange = (event) => {
//     setSelectedFont(event.target.value);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([text], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'downloaded-text.txt';
//     a.click();
//     URL.revokeObjectURL(url);
//     props.showAlert("Text has been Downloaded !","success");
//   };

//   // const handleChangesFontStyle = () => {
//   //   var text= document.getElementById("myBox");
//   //   text.select();

//   //   let newText = text;

//   //   // Ab yahan par font style apply karte hain, bina <span> tag ke
//   //   newText = `<div style="font-family: ${selectedFont}">${newText}</div>`;;
    
//   //   setText(newText);
//   // };
//   const handleExtraSpaces =()=>{
//     let newText = text.split(/[ ]+/);
//     setText(newText.join(" "))}
    
//   return (
//     <>
//       <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
//         <h1>{props.heading}</h1>

//         <div className="mb-3">
//           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743', fontFamily: selectedFont }} id="myBox" rows="8"
//           ></textarea>
//         </div>
//         <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase </button>
//         <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase </button>
//         <button className="btn btn-primary mx-2" onClick={handleCleartext}> Clear text </button>
//         <span>Select Font Style </span>
//         <select value={selectedFont} onChange={handleFontChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}}>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}}value="Arial">Arial</option>
//         <option style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Times New Roman">Times New Roman</option>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Verdana">Verdana</option>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Helvetica">Helvetica</option>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Georgia">Georgia</option>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Tahoma">Tahoma</option>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Palatino Linotype">Palatino Linotype</option>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Trebuchet MS">Trebuchet MS</option>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Courier New">Courier New</option>
//         <option style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Lucida Console">Lucida Console</option>
//         <option style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Impact">Impact</option>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Book Antiqua">Book Antiqua</option>
//         <option  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Century Gothic">Century Gothic</option>
//         <option style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} value="Comic Sans MS">Comic Sans MS</option>
//         </select>
//         <button className="btn btn-primary mx-2" onClick={handleDownload}>
//           Download Your Text
//         </button>

//         {/* <button className="btn btn-primary mx-2" onClick={handleChangesFontStyle}>
//           Change Font Style
//         </button> */}
//         <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
//       </div>
//       <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
//         <h2>Your text summary</h2>
//         <p>{text.split(" ").length} words and {text.length} characters</p>
//         <p>{0.008 * text.split(" ").length} Minutes read</p>
//         <h2>Preview</h2>
//         <div style={{ fontFamily: selectedFont }}>{text.length>0?text:"Enter something in the textbox to preview it here"}</div>
//       </div>
//     </>
//   );
// }
