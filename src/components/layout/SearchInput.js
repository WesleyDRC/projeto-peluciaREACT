import React from 'react'

function SearchInput({value, onChange, placeholder}) {
    
    return (
        <input placeholder={placeholder} type="search" value={value} onChange={onChange} />
    )
}

export default SearchInput;
