import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const MeHeader = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const [userInfo, setUserInfo] = useState<any>();

  const handleLogout = () => {
    // Dispatcher.next({type:ActionTypes.LOGOUT})
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={() => handleLogout()}>
          <LoginOutlined style={{ marginRight: "5px" }} /> 退出登录
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ padding: 0 }}>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
      ) : (
        <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
      )}
      <div>
        <BellOutlined style={{ marginRight: "30px" }} />
        <Dropdown overlay={menu}>
          <span onClick={(e) => e.preventDefault()}>
            <img width="24" alt="avatar" />
            {userInfo && userInfo["family_name"]}
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default MeHeader;
