import styled from "styled-components";

export const ListItem = styled.li`    
    display: flex;
    align-items: center;    
    padding: 15px 20px;
    background-color: #F4F4F4;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(190, 190, 185, 0.45);
    
    :not(:first-child) {        
        margin-top: 5px;        
    };
`

export const Status = styled.span`
    margin-right: 15px;
    min-width: 15px;
    height: 15px;
    background-color: #4FEA29;
    border-radius: 50%;
`

export const Avatar = styled.img`
    display: block;
    margin-right: 25px;
    width: 50px;
    height: auto;
`