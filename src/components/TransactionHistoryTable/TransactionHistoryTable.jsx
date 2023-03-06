import PropTypes from 'prop-types';

import {
  TransactionHistoriesStyled,
  Tr,
  Th,
} from './TransactionHistoryStyledTable';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const TransactionHistoryTable = ({ transactions }) => {
  return (
    <TransactionHistoriesStyled>
      <thead>
        <Tr>
          <Th>{'Type'}</Th>
          <Th>{'Amount'}</Th>
          <Th>{'Currency'}</Th>
        </Tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionHistory transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </TransactionHistoriesStyled>
  );
};

TransactionHistoryTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};
