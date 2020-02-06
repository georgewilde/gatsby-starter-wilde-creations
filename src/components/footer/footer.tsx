import React, { FC } from 'react';

import { StyledFooter } from './footer.styled';
import { SiteMetadataContext } from '@context/site-metadata';

export const Footer: FC = () => (
  <SiteMetadataContext.Consumer>
    {(siteMetadata): JSX.Element => (
      <StyledFooter>
        <div data-testid="copyright">
          © {new Date().getFullYear()}, {siteMetadata.companyName}
        </div>
        <div>
          Website created by{' '}
          <a
            href="https://www.wildecreations.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="createdBy"
          >
            Wilde Creations Ltd
          </a>
        </div>
      </StyledFooter>
    )}
  </SiteMetadataContext.Consumer>
);
