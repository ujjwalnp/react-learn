import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

export default function MidSection(props) {
    const [text, setText] = useState('Enter text here !');

    const handleOnChange =(event) => {
        setText(event.target.value);
    }
    const handleUpClick =() => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =() => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleClear =() => {
        setText('');
    }

    const [toggleText, setToggleText] = useState('Dark Mode');

    const [myStyle, setStyle] = useState({
        backgroundColor : 'white',
        color : 'black'
    })
    const toggleStyle =() => {
        if (myStyle.backgroundColor == 'white'){
            setStyle({
                backgroundColor : '#011627',
                color : 'white'
            })
            setToggleText("Light Mode")
        }else {
            setStyle({
                backgroundColor : 'white',
                color : 'black'
            })
            setToggleText('Dark Mode')
        }
    }

    return (
        <>
        
            <div className="container" style={myStyle}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>

                <button className="btn btn-primary my-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-danger my-2 mx-5" onClick={handleClear} >Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>
                    {text.split(' ').length} words and {text.length} characters <br/>
                    It takes {4/1000 *(text.length)} mins to read
                </p>
                <h2>Preview</h2>
                <p>
                    {text}
                </p>
                <button type="button" onClick={toggleStyle} class="btn btn-dark my-2" >{toggleText}</button>
            </div>
        </>
    )
}
MidSection.protoType = {
    midSectionHeading: PropTypes.string
}
MidSection.defaultProps = {
    midSectionHeading: 'Set Heading Here'
}
