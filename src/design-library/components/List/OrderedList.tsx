import React from 'react';
import styled from 'styled-components';
interface OrderedListProps {
  children?: React.ReactNode;
}

const OrderedListRoot = styled.ol`
  margin-left: 1rem;
`;

const OrderedList: React.FC<OrderedListProps> = (props) => {
  return <OrderedListRoot>{props.children}</OrderedListRoot>;
};

export default OrderedList;
