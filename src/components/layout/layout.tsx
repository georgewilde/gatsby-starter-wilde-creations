import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from '@components/header';
import { Footer } from '@components/footer';
import '../../css/materialize.min.css';

export const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
