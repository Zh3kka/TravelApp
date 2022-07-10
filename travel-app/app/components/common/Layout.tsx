import { FC, PropsWithChildren } from "react";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: any;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <div>
      <div style={{maxWidth: 480, margin: '0 auto'}}>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
