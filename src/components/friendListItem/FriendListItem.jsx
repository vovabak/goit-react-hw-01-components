import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem>
            <Status></Status>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
        </ListItem>
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,    
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,    
}