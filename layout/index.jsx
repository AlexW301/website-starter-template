import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Title</title>
        <meta name="description" content="The purpose of a meta description is to reflect the essence of a page, but with more details and context."/>
        <meta name="keywords" content="These, Are, Keywords"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
