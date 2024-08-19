import React, { useState } from 'react'

export default function Textform(props) {
  const handleuppercases = () => {
    console.log("event done" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.sAlert("captilized", "success");
    
  }

  const handleonchange = (event) => {
    console.log("onclick")
    setText(event.target.value);
  }
  
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'white' }} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleuppercases}>uppercase</button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>this is our summary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p></p>
      </div>
    </>  
  )
}
