import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
