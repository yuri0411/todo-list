import React from 'react'

const Palette = props => {
    const { colors, color, onSelect } = props
    return (
        <div className="color-picker">
            {colors.map(index => (
                <div
                    key={index}
                    style={{
                        background: index,
                    }}
                    onClick={() => console.log(index)}
                />
            ))}
        </div>
    )
}

export default Palette
