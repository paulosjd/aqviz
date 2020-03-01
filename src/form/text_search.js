import React from "react";

const TextSearchInput = (props) => {

    const handleTextChange = (e) => {
        props.handleTextChange(e.target.value)
    };

    return (
        <input name='text_filter' type="text" placeholder="Search"
               className='text_filter oa_ignore'
               value={props.textInput}
               onChange={handleTextChange}
        />
    )
};

export default TextSearchInput;