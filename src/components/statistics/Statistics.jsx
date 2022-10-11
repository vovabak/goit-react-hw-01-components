export const Statistics = ({stats, title=null}) => {
    
    return (        
        <section>
            <h2>{title}</h2>

            <ul>
                {stats.map(stat => <li key={stat.id}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
                </li>)
                }
            </ul>
        </section>
    )
}