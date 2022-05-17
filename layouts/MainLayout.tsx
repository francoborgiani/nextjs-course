import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import styles from "./MainLayout.module.css";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};