import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../layouts/MainLayout";
import DarkLayout from "../layouts/DarkLayout";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home - Next App</title>
      </Head>
      <h1 className="title">
        Ir a {""}
        <Link href={"/about"}>
          <a>About</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
