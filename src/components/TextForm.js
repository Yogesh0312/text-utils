import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = ("");
        setText(newText)
    }

    const handleCapitalizedClick = () => {
        // let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
    }

    const handleonchange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    return (
        <>

            <div className="container">
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className="form-control" value={text} onChange={handleonchange} id='myBox' rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalizedClick}>Capitalized Text</button>
            </div>

            <div className="container mt-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} Words And {text.length} Charactors</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
