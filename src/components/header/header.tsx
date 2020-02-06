import React, { FC } from 'react';

import {
  StyledHeader,
  StyledInner,
  StyledLink,
  StyledLogoText,
} from './header.styled';
import { SiteMetadataContext } from '@context/site-metadata';

export const Header: FC = () => (
  <SiteMetadataContext.Consumer>
    {(siteMetadata): JSX.Element => (
      <StyledHeader>
        <StyledInner className="container">
          <StyledLogoText>
            <StyledLink to="/" data-testid="siteTitle">
              {siteMetadata.companyName}
            </StyledLink>
          </StyledLogoText>
        </StyledInner>
      </StyledHeader>
    )}
  </SiteMetadataContext.Consumer>
);
