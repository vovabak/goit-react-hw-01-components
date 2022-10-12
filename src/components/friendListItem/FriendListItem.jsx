import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li>
            <span></span>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,    
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,    
}