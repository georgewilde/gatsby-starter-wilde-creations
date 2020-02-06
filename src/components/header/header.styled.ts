import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  background: rebeccapurple;
`;

export const StyledInner = styled.div`
  padding: 0.5rem;
`;

export const StyledLogoText = styled.div`
  margin: 0;
  font-weight: 400;
  font-size: 2em;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
