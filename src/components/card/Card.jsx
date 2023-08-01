import  './card.css';
import Title from '../title/Title';
import StatsTable from '../StatsTable/StatsTable';
import LabelAndDescription from '../labelAndDescription/LabelAndDescription';
import { parseMonsterPropsToArray, parseMonsterAbilities} from '../../utilities/utils.js';

const Card = ( {monster, className} ) => {
    const {name} = monster;
    const stringAttributes = parseMonsterPropsToArray(monster);
    const abilities = parseMonsterAbilities(monster);
    return (
        <div className={className}>
            <Title 
                titleText={name} 
                titleClass='monsterTitle' />
            <StatsTable
                monsterData = {monster.stats}
            />
            { stringAttributes.map( (attr, ind) => {
            return ( 
                <div key={'attr_' + ind}>
                    <LabelAndDescription 
                        attr={attr} 
                    />
                </div>
            )}
            )}
            { abilities.map( ( ability, ind ) => {
            return (
                <div key={'ability_' + ind}>
                    <LabelAndDescription 
                        attr={ability} 
                    />
                </div>
            )}
            )}
            
        </div>
    )
}

export default Card;