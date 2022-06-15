import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  return <h1>The DetailPage {router.query.newsId}</h1>;
};

export default DetailPage;
