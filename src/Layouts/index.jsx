import { Layout as AntLayout } from "antd";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import style from "./style.module.scss";
import { Outlet } from "react-router-dom"; 

const Layout = () => {
  return (
    <AntLayout className={style.container}>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </AntLayout>
  );
};

export default Layout;