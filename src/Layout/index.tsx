import React, { useContext } from "react";
import { Layout } from "antd";
import { HashRouter as Router } from "react-router-dom";
import { PermissinContext } from "../App";
import MeHeader from "./me-header";
import MeSider from "./me-sider";
import MeFooter from "./me-footer";
import Routes from "./me-route/routes";

const { Content } = Layout;

const MeLayout = (props: any) => {
  const { initRoute = [] } = useContext(PermissinContext);

  return (
    <Router>
      <Layout>
        <MeSider />
        <Layout>
          <MeHeader />
          <Content>
            <Routes routes={initRoute} />
          </Content>
          <MeFooter />
        </Layout>
      </Layout>
    </Router>
  );
};

export default MeLayout;
