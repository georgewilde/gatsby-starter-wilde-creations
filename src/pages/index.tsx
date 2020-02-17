import React, { FC } from 'react';

import { Layout } from '@components/layout';
import { SEO } from '@components/seo';

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-4xl">
      🚀 A bare-bones Gatsby starter that&apos;s ready to rock and roll!
    </h1>
    <ul className="my-8">
      <li>✅ TypeScript</li>
      <li>✅ Styled Components</li>
      <li>✅ StoryBook</li>
    </ul>
    <p>
      📖 View the{' '}
      <a
        href="https://github.com/georgewilde/gatsby-starter-wilde-creations/blob/master/README.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        README
      </a>{' '}
      for all the details.
    </p>
  </Layout>
);

export default IndexPage;
