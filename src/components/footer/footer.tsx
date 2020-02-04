import React, { FC } from 'react';

import { StyledFooter } from './footer.styled';

export const Footer: FC = () => (
  <StyledFooter>
    <div data-testid="copyright">
      © {new Date().getFullYear()}, Avalon Electricals
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
);
