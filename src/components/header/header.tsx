import React, { FC } from 'react';

import {
  StyledHeader,
  StyledInner,
  StyledLink,
  StyledLogoText,
} from './header.styled';

interface HeaderProps {
  siteTitle: string;
}

export const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <StyledHeader>
    <StyledInner className="container">
      <StyledLogoText>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </StyledLogoText>
    </StyledInner>
  </StyledHeader>
);
