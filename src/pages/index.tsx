import React, { FC } from 'react';

import { Layout } from '@components/layout';
import { SEO } from '@components/seo';

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is the home page</h1>
  </Layout>
);

export default IndexPage;
