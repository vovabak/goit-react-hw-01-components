import styled from 'styled-components';
import getRandomHexColor from '../../utils/getRandomHexColor';

export const StatisticsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;    
    max-width: 90%;
    border-radius: 5px;
    background-color: #FFF;
    box-shadow: 5px 5px 5px rgba(190, 190, 185, 0.45); 
`

export const Title = styled.h2`
    margin: 30px 0;
    font-weight: bold;
    font-size: 22px;
`
export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    min-width: 100%;
`

export const ListItem = styled.li`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;    
    padding: 20px 0;
    width: calc(100%/3);    
    background-color: ${getRandomHexColor};    

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

export const Label = styled.span`
    font-size: 14px;    
`

export const Percentage = styled.span`
    margin-top: 5px;
    font-weight: bold;
    font-size: 16px;
`