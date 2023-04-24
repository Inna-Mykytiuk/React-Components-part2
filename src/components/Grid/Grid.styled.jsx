import styled from '@emotion/styled';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  grid-gap: ${({ theme }) => theme.spacing(5)};
`;
