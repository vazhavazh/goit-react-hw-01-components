import {
  TransactionHistoriesStyled,
  Tr,
  Th
} from "./TransactionHistoryStyledTable"

import {TransactionHistoryElem} from "./TransactionHistory/TransactionHistory"

export const TransactionHistoryTable = ({ transactions}) => {
    return <TransactionHistoriesStyled>
     <thead>
    <Tr>
          <Th>{'Type'}</Th>
          <Th>{'Amount'}</Th>
          <Th>{'Currency'}</Th>
    </Tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
           <TransactionHistoryElem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </TransactionHistoriesStyled>
} 

