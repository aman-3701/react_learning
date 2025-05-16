import React , {useState} from 'react'


export default function Textform(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpclick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
   const handleLoclick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleclearclick = () =>{
    let newText = "";
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
   
  }
   

  return (
    <>
    <div>
      
  <div className="form-group">
    <label htmlFor="ex ampleInputEmail1">{props.heading}</label>
    <textarea className="form-control"  value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  
  
  <button className="btn btn-primary mx-2 " onClick={handleUpclick}>Convert to Uppercase</button>
   
    <button className="btn btn-primary" onClick={handleLoclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 " onClick={handleclearclick}>clear</button>
   
     </div>

    <div className="container my-3">
       <h1>Your text Summary</h1>
       <p> {text.split(" ").length} Words and  {text.length} characters</p>
       <p> {0.008*text.split(" ").length} minutes to read </p>
       <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>'
    </>
  )
}
