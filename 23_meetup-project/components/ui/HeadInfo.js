import Head from "next/head";

function HeadInfo(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description}></meta>
    </Head>
  );
}
export default HeadInfo;
