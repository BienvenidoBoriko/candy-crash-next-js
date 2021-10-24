import Head from "next/head";
import CandyCrush from "../components/CandyCrush";

export default function Home() {
  return (
    <div className="container m-auto">
      <Head>
        <title>Candy-crash whit next-js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CandyCrush />
      </main>

      <footer>Candy-crash</footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
