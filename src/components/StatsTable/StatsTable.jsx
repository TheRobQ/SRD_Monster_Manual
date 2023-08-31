import './statsTable.css';

const StatsTable = ( { monsterData } ) => {
    const columns = Object.keys(monsterData);
    return (
        <table className="statsTable">
            <thead>
                <tr>
                    { columns.map( (stat, i) => <th key={i}>{stat.toUpperCase()}</th>) }
                </tr>
            </thead>
            <tbody>
                <tr>{ columns.map( (stat, i) => {
                    return <td key={i + '_stat'}>{monsterData[stat]}</td>
                })}</tr>

            </tbody>
        </table>
    )
}

export default StatsTable;