import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { SiteMetadataContext } from '@context/site-metadata';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: any[];
}

export const SEO: FC<SEOProps> = ({
  title,
  description = '',
  lang = 'en',
  meta = [],
}) => {
  return (
    <SiteMetadataContext.Consumer>
      {(siteMetadata): JSX.Element => {
        const metaDescription = description || siteMetadata.description;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${siteMetadata.companyName}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(meta)}
          />
        );
      }}
    </SiteMetadataContext.Consumer>
  );
};
