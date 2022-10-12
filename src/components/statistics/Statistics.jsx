import PropTypes from 'prop-types';
import { StatisticsSection, Title, List, ListItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ stats, title = null }) => {
    
    return (        
        <StatisticsSection>
            <Title>{title}</Title>

            <List>
                {stats.map(({id, label, percentage}) => <ListItem key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </ListItem>)
                }
            </List>
        </StatisticsSection>
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