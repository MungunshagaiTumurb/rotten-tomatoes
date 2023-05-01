import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="container mx-auto">
      <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
