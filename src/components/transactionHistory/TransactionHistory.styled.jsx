import styled from 'styled-components';

export const TransactionHistory = styled.table`
    margin: 20px auto 0;
    padding: 0;
    width: 90%;    
    border-radius: 5px;
    border-collapse: collapse;
    box-shadow: 5px 5px 5px rgba(190, 190, 185, 0.45);    
    background-color: #FFF;
`

export const HeadData = styled.th`    
    padding: 10px 0;    
    font-weight: bold;
    font-size: 16px;
    background-color: #44DADB;
    
    :not(:last-child) {
        border-right: 1px solid;
        border-color: #FFF;
    };
    :first-child {        
        border-top-left-radius: 5px;
    };
    :last-child {
        border-top-right-radius: 5px;        
    };
`

export const BodyData = styled.td`
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
    color: #6B6B6B;  
`

export const BodyRow = styled.tr`
    :nth-child(2n) {        
        background-color: #F4F4F4;
    };

    :nth-child(2n + 1) {        
        td:not(:last-child) {            
            border-right: 1px solid;
            border-color: #F4F4F4;
        };
    };
    
    :last-child {
        td:first-child {                
            border-bottom-left-radius: 5px;
        };
        td:last-child {
            border-bottom-right-radius: 5px;                
        };
    };
`
