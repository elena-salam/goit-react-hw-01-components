import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
width: 360px;
margin: 0 auto;
margin-bottom: 40px;
text-align: center;
border: 1ps solid #a4ccdc;
box-shadow: 0px 0px 2px 0px;

`;

const TableHead = styled.thead`
/* paddding: 10px auto; */
background-color: #138bbd;
border-left: 1px solid #fff;
color: #fff;
`;

const Title = styled.th`
padding: 10px 0;
font-size: 14px;
text-transform: uppercase;
`;

const TableRow = styled.tr`
&:nth-child(odd){
  background-color: #fff;
};
&:nth-child(even){
  background-color: #ecf1f4;
}
;`

const TableCeil = styled.td`
padding: 10px 0;
`;


function TransactionHistory ({items}){
  return(
    <Table>
      <TableHead>
        <tr>
        <Title>Type</Title>
        <Title>Amount</Title>
        <Title>Currency</Title>
        </tr>
      </TableHead>
      <tbody>
        {items.map(
            item => <TableRow key={item.id}><TableCeil>{item.type}</TableCeil><TableCeil>{item.amount}</TableCeil><TableCeil>{item.currency}</TableCeil></TableRow>
            )}
          
        
        
      </tbody>
    </Table>
  )
}

TransactionHistory.propTypes = {
  items:PropTypes.arrayOf(PropTypes.object).isRequired,
  
}
export default TransactionHistory;