import PropTypes from 'prop-types';
import { ProfileContainer, ProfileInfo, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsItem, StatsLabel, StatsQuantity } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {   

    return (
        <ProfileContainer>
            <ProfileInfo>
                <ProfileAvatar
                    src={avatar}
                    alt={username}                     
                />
                <ProfileName>{username}</ProfileName>
                <ProfileTag>@{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
            </ProfileInfo>
            <ProfileStats>
                <ProfileStatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{followers}</StatsQuantity>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{views}</StatsQuantity>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{likes}</StatsQuantity>
                </ProfileStatsItem>
            </ProfileStats>
        </ProfileContainer>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}
