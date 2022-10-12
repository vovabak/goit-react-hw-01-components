import PropTypes from 'prop-types';
import { ListItem, Status, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem>
            <Status></Status>
            <Avatar src={avatar} alt={name} />
            <p>{name}</p>
        </ListItem>
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,    
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,    
}