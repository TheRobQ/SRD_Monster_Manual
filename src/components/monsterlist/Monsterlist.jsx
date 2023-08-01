import Card from '../card/Card';
import  './monsterList.css';

const Monsterlist = ({ monsters }) => {
  return (
    <div className='card-list' id="listContainer">
      {monsters.map((monster, idx) => {
        return <Card 
          key={idx} 
          monster={monster} 
          className='monsterCard'/>;
      })}
    </div>
  )
};

export default Monsterlist