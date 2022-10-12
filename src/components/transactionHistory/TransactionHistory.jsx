import PropTypes from 'prop-types';
import { TransactionHistory as TransactionTable, Head, HeadData, Body, BodyData, BodyRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {

    return (
        <TransactionTable>
            <thead>
                <tr>
                    <HeadData>Type</HeadData>
                    <HeadData>Amount</HeadData>
                    <HeadData>Currency</HeadData>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency }) =>
                    <BodyRow key = {id}>
                        <BodyData>{type}</BodyData>
                        <BodyData>{amount}</BodyData>
                        <BodyData>{currency}</BodyData>
                    </BodyRow>)
                }            
            </tbody>
        </TransactionTable>
        )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}