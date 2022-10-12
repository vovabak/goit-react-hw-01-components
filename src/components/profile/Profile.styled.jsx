import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 30px 0 0;
    max-width: 90%;
    border-radius: 5px;
    background-color: #FFF;
    box-shadow: 5px 5px 5px rgba(190, 190, 185, 0.45);
`

export const ProfileInfo = styled.div`        
    text-align: center;    
`

export const ProfileAvatar = styled.img`
    width: 50%;
    height: auto;
    border-radius: 50%;
    background-color: #F4F4F4;    
`

export const ProfileName = styled.p`
    margin-top: 20px;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 22px;
`

export const ProfileTag = styled.p`
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 16px;
    color: #6B6B6B;
`

export const ProfileLocation = styled.p`
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 18px;
    color: #6B6B6B;
`

export const ProfileStats = styled.ul`
    margin: 20px 0 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    min-width: 100%;    
`

export const ProfileStatsItem = styled.li`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;    
    padding: 20px 0;
    width: calc(100%/3);    
    background-color: #F4F4F4;

    :not(:first-child) {
        box-shadow: 0px 5px 5px rgba(190, 190, 185, 0.45);
    };

    :first-child {
        border-bottom-left-radius: 5px;
    }

    :last-child {
        border-bottom-right-radius: 5px;
    }
`

export const StatsLabel = styled.span`
    font-size: 14px;
    color: #6B6B6B;
`

export const StatsQuantity = styled.span`
    margin-top: 5px;
    font-weight: bold;
    font-size: 18px;
`