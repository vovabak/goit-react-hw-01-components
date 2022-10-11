import {FriendListItem} from '../friendListItem/FriendListItem'

export const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(friend => <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />)}
        </ul>
    )
}