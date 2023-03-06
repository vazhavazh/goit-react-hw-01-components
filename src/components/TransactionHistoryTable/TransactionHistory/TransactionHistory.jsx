import PropTypes from 'prop-types';

import { TransactionHistoryElem, Td } from './TransactionHistoryStyled';

// TransactionHistory
export const TransactionHistory = ({ transaction }) => {
  return (
    <TransactionHistoryElem>
      <Td>{transaction.type}</Td>
      <Td>{transaction.amount}</Td>
      <Td>{transaction.currency}</Td>
    </TransactionHistoryElem>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
