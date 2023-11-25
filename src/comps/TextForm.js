import React, {useState} from 'react'


export default function TextForm(props) {  // Handling events in React
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText) // setText helps in updating text value as it is a state, this is the way to update the value
    }

    const handleOnChange = (event)=>{ // Handling events in React
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');  // this Hooks concept in React where it is a part of state
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <div> 
            <h1>{props.heading}</h1> 
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}