import { FriendListItem } from '../friendListItem/FriendListItem'
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(({id, avatar, name, isOnline}) => <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />)}
        </ul>
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