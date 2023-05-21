import styled from 'styled-components';

export const Table = styled.table`
  background-color: ${props => {
    return props.theme.colors.white;
  }};
  max-width: 100%;
  width: 360px;
  border-spacing: 0px;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const ThTitle = styled.th`
  border: 1px solid grey;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

export const Tbody = styled.tbody``;

export const TdValue = styled.td`
  border: 1px solid ${props => props.theme.colors.grey};
  padding-left: 35px;
`;
