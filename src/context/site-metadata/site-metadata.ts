import { createContext } from 'react';

export interface SiteMetadata {
  companyName: string;
  description: string;
  author: string;
}

const defaultState: SiteMetadata = {
  companyName: '',
  description: '',
  author: '',
};

export const SiteMetadataContext = createContext(defaultState);
