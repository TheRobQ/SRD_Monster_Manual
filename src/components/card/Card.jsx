import  './card.css';
import Title from '../title/Title';
import StatsTable from '../StatsTable/StatsTable';
import LabelAndDescription from '../labelAndDescription/LabelAndDescription';
import { parseMonsterPropsToArray, parseMonsterAbilities } from '../../utilities/utils.js';

const Card = ( {monster, className} ) => {
    const {name} = monster;
    //const monsterQuickAttributes = parseQuickAttributes(monster, ['armor class', 'hit points', 'speed'])
    const monsterAttributes = parseMonsterPropsToArray(monster);
    const monsterAbilities = parseMonsterAbilities(monster, 'abilities');
    const monsterActions = parseMonsterAbilities(monster, 'actions');
    return (
        <div className={className}>
            <div className='content'>
                <Title 
                    titleText={name} 
                    titleClass='monsterTitle' />
                
                <StatsTable
                    monsterData = {monster.stats}
                />
                <div className='attributes listSection'>
                    { monsterAttributes.map( (attr, ind) => {
                        return ( 
                            <div key={'attr_' + ind}>
                                <LabelAndDescription 
                                    attr={attr} 
                                    attrContainer='statContainer' 
                                    attrLabel='statLabel'
                                    attrText='statText'
                                />
                            </div>
                        )}
                    )}
                </div>
                <div className='abilities listSection'>
                    { monsterAbilities.map( ( ability, ind ) => {
                        return (
                            <div key={'ability_' + ind}>
                                <LabelAndDescription 
                                    attr={ability} 
                                    attrContainer='attrContainer' 
                                    attrLabel='attrLabel'
                                />
                            </div>
                        )}
                    )}
                </div>
                <div className='actions listSection'>          
                    { monsterActions.map( ( action, ind ) => {
                        return (
                            <div key={'action_' + ind}>
                                <LabelAndDescription 
                                    attr={action} 
                                />
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;