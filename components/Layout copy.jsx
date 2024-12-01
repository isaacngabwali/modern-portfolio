import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Dr.Amanya Abdul  Karim</title>
        <meta
          name="description"
          content="Dr.Amanya Abdul  Karim | The author of Your time is now don't wait. Senior Financial advisor at UAP old mutual. Skilled capacity building trainer and financial literacy specialist."
        />
        <meta
          name="keywords"
          content="Amanya Abdul  Karim, The author of Your time is now don't wait, nextjs, Senior Financial advisor, "
        />
        <meta name="author" content="Dr.Amanya Abdul  Karim" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
