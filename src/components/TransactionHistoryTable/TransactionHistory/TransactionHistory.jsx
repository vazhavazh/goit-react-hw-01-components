import PropTypes from "prop-types"

import {
    TransactionHistory,
    Td
} from "./TransactionHistoryStyled"


export const TransactionHistoryElem = ({ transaction }) => {
    return (
        <TransactionHistory>
            <Td>{transaction.type}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.currency}</Td>
        </TransactionHistory>
    )
}

TransactionHistoryElem.propTypes = {
    type: PropTypes.string,
amount: PropTypes.string,
currency: PropTypes.string
}
