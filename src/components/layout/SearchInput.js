import React from 'react'

function SearchInput({value, onChange}) {
    
    return (
        <input type="search" value={value} onChange={onChange} />
    )
}

export default SearchInput;
