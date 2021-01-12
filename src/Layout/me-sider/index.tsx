import React from "react";
import { Layout } from "antd";
import MeMenu from "../me-menu";

const { Sider } = Layout;

const MeSider = (props: any) => {
  const { title, collapsed } = props;

  return (
    <Sider width={256} trigger={null} collapsible collapsed={collapsed}>
      <div>
        <img alt="" />
        {!collapsed ? <h1>{title}</h1> : <></>}
      </div>
      <MeMenu />
    </Sider>
  );
};

export default MeSider;
