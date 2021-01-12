import React from "react";

import { SettingOutlined } from "@ant-design/icons";

interface MenuIconProps {
  title: string;
}

/**
 * 配置菜单图标
 */
const iconConfig = {
  systemManage: <SettingOutlined />,
};

const MenuIcon = (props: MenuIconProps) => {
  const title = props.title as "systemManage";
  return iconConfig[title];
};

export default MenuIcon;
