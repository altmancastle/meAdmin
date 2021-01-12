import React, { useContext } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "./icon";
import { PermissinContext } from "../../App";

const { SubMenu } = Menu;

const MeMenu = () => {
  const { initMenu } = useContext(PermissinContext);

  const { pathname } = useLocation();

  const [, defaultOpenKey, defaultSelectedKey, lastKey] = pathname.split("/");

  const openKey: string[] = [defaultOpenKey];
  let selectedKey: string[] = [defaultSelectedKey];

  if (lastKey) {
    openKey.push(defaultSelectedKey);
    selectedKey = [lastKey];
  }

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[`${defaultSelectedKey}`]}
      defaultOpenKeys={openKey}
      selectedKeys={selectedKey}
      mode="inline"
    >
      {initMenu.map((item) => {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <MenuIcon title={item.key} />
                <span>{item.title}</span>
              </span>
            }
          >
            {item.children &&
              item.children.length > 0 &&
              item.children.map((subItem) => {
                if (subItem.isExpend) {
                  return (
                    <SubMenu
                      key={subItem.key}
                      title={<span>{subItem.title}</span>}
                    >
                      {subItem.children &&
                        subItem.children.length > 0 &&
                        subItem.children.map((subLastItem) => (
                          <Menu.Item key={subLastItem.key}>
                            <Link to={subLastItem.link}>
                              {subLastItem.title}
                            </Link>
                          </Menu.Item>
                        ))}
                    </SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item key={subItem.key}>
                      <Link to={subItem.link}>{subItem.title}</Link>
                    </Menu.Item>
                  );
                }
              })}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

export default MeMenu;
