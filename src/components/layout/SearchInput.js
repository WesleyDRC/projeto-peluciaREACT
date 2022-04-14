import React from 'react'

function SearchInput({value, onChange}) {
    
    return (
        <input placeholder="Procurar pelúcia..." type="search" value={value} onChange={onChange} />
    )
}

export default SearchInput;
