import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../../layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <Head>
        <title>Contact - Next App</title>
      </Head>{" "}
      <h1 className="title">
        Ir a {""}
        <Link href={"/pricing"}>
          <a>Pricing</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/contact/index.js</code>
      </p>
    </MainLayout>
  );
}
