import React, { ReactNode } from "react";
import Header from "../general/header/Header";
import Footer from "../general/footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* Other common components or footer can also be placed here */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
