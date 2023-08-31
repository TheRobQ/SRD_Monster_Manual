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

const parseMonsterAbilities = (obj, property) => {
    const abilityGroup = []
    obj[property].forEach( ability => {
        let abilityName = ability.name.replace('.', '');
        //for abilities, set the text, for actions,parse in case there are legendary actions
        let abilityText = property  === 'actions' ? '' : ability.description;
        if(property  === 'actions') {
            let checkLegendary = parseLegendaryActions(ability.description);
            abilityText = checkLegendary.ability;
            abilityGroup.push([abilityName, abilityText])
            if(checkLegendary.legendary) {
                abilityGroup.push(['Legendary Actions', checkLegendary.legendary]); 
            }
        } else {
            abilityGroup.push([abilityName, abilityText])
        }
    });
    return abilityGroup;
};

const parseLegendaryActions = inputString => {
    const legendaryText = /The (\w+) can take 3 legendary actions[\s\S]*?at the start of its turn\./;
    const match = inputString.match(legendaryText);
    if (match) {
        const extractedSection = match[0];
        const index = inputString.indexOf(extractedSection);
        const parsedAbility = inputString.slice(0, index);
        return {legendary: extractedSection, ability: parsedAbility}
    } else {
        return {legendary: '', ability: inputString}
    }
};

export { 
    parseMonsterPropsToArray, 
    parseMonsterAbilities
}