export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li>
            <span></span>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
        </li>
    )
}