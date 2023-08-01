const LabelAndDescription = ( {attr} ) =>{
    return (
        <div> 
            <label>{attr[0]}: </label>
            <span>{attr[1]}</span>
        </div> )

}

export default LabelAndDescription