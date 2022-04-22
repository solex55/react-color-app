import React from 'react'

function Input({colorValue, setColorValue, darkFont, setDarkFont}) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Color type</label>
            <input 
                autoFocus
                type='text'
                value={colorValue}
                placeholder='Input a color'
                onChange={(e) => setColorValue(e.target.value)}
            />
            <button
                type="button"
                onClick={() => setDarkFont(!darkFont)}
            >
                Toggle Font Color
            </button>
        </form>
    )
}

export default Input
