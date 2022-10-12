import PropTypes from 'prop-types';

export const Statistics = ({ stats, title = null }) => {
    
    return (        
        <section>
            <h2>{title}</h2>

            <ul>
                {stats.map(({id, label, percentage}) => <li key={id}>
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </li>)
                }
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
    title: PropTypes.string,
}