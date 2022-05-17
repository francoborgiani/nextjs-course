import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../layouts/MainLayout";

export default function NotFound() {
  return (
    <MainLayout>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <h1 className="title">
        Not Found 404{" "}
        <Link href="/">
          <a>go to Home</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/404.js</code>
      </p>
    </MainLayout>
  );
}
