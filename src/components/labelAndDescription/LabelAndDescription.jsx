import './labelAndDescription.css';
 
const LabelAndDescription = ( {attr, attrContainer, attrLabel, attrText} ) =>{
    return (
        <div className={attrContainer}> 
            <label className={attrLabel}>{attr[0]}: </label>
            <span className={attrText}>{attr[1]}</span>
        </div> )

}

export default LabelAndDescription