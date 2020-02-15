import React from "react";

const TextSearchInput = (props) => {

    const handleTextChange = (e) => {
        props.handleTextChange(e.target.value)
    };

    const handleInputBlur = (e) => {
        if (!e.relatedTarget || !e.relatedTarget.className.includes('text_filter')) {
            props.handleTextChange('')
        }
    };

    return (
        <input name='text_filter' type="text" placeholder="Search"
               className='text_filter'
               value={props.textInput}
               onChange={handleTextChange}
               onBlur={handleInputBlur}
        />
    )
};

export default TextSearchInput;