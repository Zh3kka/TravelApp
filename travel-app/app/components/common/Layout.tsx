import { FC, PropsWithChildren } from "react";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: any;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
