import Head from "next/head";
import globalMeta from "./globalmeta";

interface SEOHeadProps {
  title?: string;
  description?: string;
  icon?: string;
  appleTouchIcon?: string;
  canonicalUrl?: string;
  image?: string;
  url?: string;
  children?: React.ReactNode;
}

const SEOHead = ({
  title = globalMeta.siteName,
  description = globalMeta.description,
  canonicalUrl = globalMeta.siteUrl,
  icon = globalMeta.icon,
  // appleTouchIcon = globalMeta.appleTouchIcon,
  // ogType,
  // ogImgUrl = globalMeta.siteLogo,
  children
}: SEOHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href={icon} />
      <link rel="canonical" href={canonicalUrl} />
      {/* <link rel="apple-touch-icon" href={appleTouchIcon}/> */}

      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="description" />
      {/* <meta property="og:image" content={ogImgUrl} key="image" /> */}
      <meta property="og:url" content={canonicalUrl} key="url" />
      {/* <meta property="og:type" content={ogType} key="type" /> */}
      <meta property="og:locale" content="en_US" key="locale" />
      <meta property="og:site_name" content={globalMeta.siteName} key="site_name" />
      <meta charSet="utf-8" />

      {children}
    </Head>
  );
};

export default SEOHead;