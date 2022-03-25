import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) {
  //header
  // webpage contains
  // footer

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
