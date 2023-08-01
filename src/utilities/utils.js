const parseMonsterPropsToArray  = obj => {
    const stringAttributes = [];

    Object.keys(obj).forEach( attribute => {
        if(typeof obj[attribute] === 'string') {
            if(attribute !== 'name') {
                let strAttribute = attribute.replace('_', ' ');
                strAttribute = strAttribute.charAt(0).toUpperCase() + strAttribute.slice(1);
                let attrArray = [strAttribute, obj[attribute]];
                stringAttributes.push(attrArray)
            }
        }
    });

    return stringAttributes;
};

const parseMonsterAbilities = obj => {
    const abilityGroup = []
    obj.abilities.forEach( ability => {
        abilityGroup.push([ability.name, ability.description])
    });
    console.log(abilityGroup)
    return abilityGroup;
}

export { 
    parseMonsterPropsToArray, 
    parseMonsterAbilities
}