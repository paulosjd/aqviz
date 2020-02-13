import React from "react";
import { Button } from "reactstrap";

const TextSearchInput = (props) => {

    const handleTextChange = (e) => {
        props.handleTextChange(e.target.value)
    };

    const handleInputBlur = (e) => {
        if (!e.relatedTarget || !e.relatedTarget.className.includes('text_filter')) {
            // props.resetTextInput();
        }
    };

    const handleKeyPress = (e) => {
        // if (e.key === 'Enter' && props.textInput.length > 2) {
            // props.handleTextSubmit()
        // }
    };

    return (
        <input name='text_filter' type="text" placeholder="Enter text"
               className='text_filter'
               value={props.textInput}
               onChange={handleTextChange}
               onKeyPress={handleKeyPress}
               onBlur={handleInputBlur}
        />
    )
};

export default TextSearchInput;