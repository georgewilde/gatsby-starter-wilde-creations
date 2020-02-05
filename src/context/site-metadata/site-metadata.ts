import { createContext } from 'react';

export interface SiteMetadata {
  title: string;
}

const defaultState: SiteMetadata = {
  title: '',
};

export const SiteMetadataContext = createContext(defaultState);
