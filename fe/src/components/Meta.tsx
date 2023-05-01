import Head from "next/head";

const Meta = ({
  keywords,
  description,
  title,
}: {
  keywords: any;
  description: any;
  title: any;
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Rotten tomatoes",
  keywords: "movie app, fre movies, popular movies",
  description: "Rotten tomatoes",
};

export default Meta;
