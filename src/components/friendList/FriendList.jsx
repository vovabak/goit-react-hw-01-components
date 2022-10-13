import { FriendListItem } from '../friendListItem'
import { List } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(({id, avatar, name, isOnline}) => <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />)}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,    
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired, 
  })).isRequired,
}
