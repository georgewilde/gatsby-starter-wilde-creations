import React, { FC } from 'react';

import { StyledFooter } from './footer.styled';

export const Footer: FC = () => (
  <StyledFooter>
    <div>© {new Date().getFullYear()}, Avalon Electricals</div>
    <div>
      Website designed by{' '}
      <a href="https://www.wildecreations.co.uk" target="_blank">
        Wilde Creations Ltd
      </a>
    </div>
  </StyledFooter>
);
