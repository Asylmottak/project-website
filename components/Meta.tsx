import React, { FC } from "react";
import Head from "next/head";

interface IMetaProps {
  title: string;
  keywords: string;
  description: string;
}

/**
 * Populates HTML header with meta fields for specific pages.
 * @prop    {string}      title       - The title of the page.
 * @prop    {string}      keywords    - The keywords connected to the page.
 * @prop    {string}      description - The description of the page.
 * @return  {JSX.Element}             - The meta fields in HTML header.
 */
const Meta: FC<IMetaProps> = ({
  title,
  keywords,
  description,
}): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        href={`https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap`}
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
