import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mustafa Toy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mustafa Toy" />
      </main>
    </div>
  );
}
