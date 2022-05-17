import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../../layouts/MainLayout";
import DarkLayout from "../../layouts/DarkLayout";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Next App</title>
      </Head>
      <h1 className="title">
        Ir a {""}
        <Link href={"/"}>
          <a>Home</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/pricing/index.js</code>
      </p>
    </>
  );
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
