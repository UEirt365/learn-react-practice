import Link from "next/link";
import { Fragment } from "react";

const News = () => {
  return (
    <Fragment>
      <h1>The NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/hello1">hello1</Link>
        </li>
        <li>
          <Link href="/news/hello2">hello2</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
