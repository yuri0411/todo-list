import React from 'react'

const Palette = props => {
    const { colors, onSelect } = props
    return (
        <div className="color-picker">
            {colors.map(index => (
                <div
                    key={index}
                    style={{
                        background: index,
                    }}
                    onClick={() => onSelect(index)}
                />
            ))}
        </div>
    )
}

export default Palette
