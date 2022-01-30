const ColorPicker = ({ color, setColor, frameColors }) => {
    
    const onChangeColor = (color) => {
        setColor(color)
    }
    
    return (
        <div className="colors">
            <b>Color de montura:</b> 
            <div className="collect-dots">
                <div className={`dot bg-${frameColors.default} ${ frameColors.default === color ? 'selected' : '' }`} onClick={ () => onChangeColor(frameColors.default) }></div>
                {
                    frameColors.variants.map((item, index) => (
                        <div className={`dot bg-${item} ${ item === color ? 'selected' : '' }`} key={index} onClick={ () => onChangeColor(item) }></div>
                    ))
                }
            </div>
        </div>
    )
}

export default ColorPicker