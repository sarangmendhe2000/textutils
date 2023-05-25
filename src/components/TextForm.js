import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked", text);
    let newText= text.toUpperCase()
    setText(newText)
    props.showAlert("Text Converted to UpperCase Successfully ! ", "success")
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked", text);
    let newText= text.toLowerCase()
    setText(newText)
    props.showAlert("Text Converted to LowerCase Successfully ! ", "success")
  }
  const handleOnClick=() =>{
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied Successfully ! ", "success")
  }

  const removeExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces is removed  ! ", "success")
  }
  const handleClearClick =()=>{
    let newText= ""
    setText(newText)
    props.showAlert("Text Clear Successfully ! ", "success")
  }
  const handleOnChange =(event)=>{
    // console.log("On Change")
    setText(event.target.value)
  }

  
  const [text, setText]= useState("Enter text here")
  
  return (
    <>
    <div className='conatiner' style={{color: props.mode === 'light' ? 'black' : 'white'}} >

        <h2>{props.heading}</h2>

         <div className="mb-3">
         <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleOnClick}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} & {text.length} characters</p>
    <p>{0.008 *(text.split(" ").length)} Minutes to read</p>  
    <h3>Priview</h3>
    <p>{text.length>0 ? text : "Enter Something in textbox to Priview it Here"}</p>
    </div>
    </>
  )
}
