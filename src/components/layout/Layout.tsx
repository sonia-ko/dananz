import React, { ReactNode } from "react";
import Header from "../general/blocks/header/Header";
import Footer from "../general/blocks/footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* Other common components or footer can also be placed here */}
      <Footer />
    </div>
  );
};

export default Layout;
