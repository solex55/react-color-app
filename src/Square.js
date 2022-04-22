import React from 'react'

function Square({colorValue, darkFont}) {
    return (
        <div style={{ 
                        backgroundColor: colorValue,
                        color: darkFont ? '#000' : '#FFF'
                    }} className="square">
            <p>{colorValue ? colorValue : 'No color typed matched'}</p>
        </div>
    )
}

Square.defaultProps = {
    colorValue: 'Empty Value'
}

export default Square
