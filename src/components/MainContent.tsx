import React, { ReactNode, useContext } from "react";
import { PageHeader } from "antd";
import { useBreadcrumb } from "../hooks/useBreadcrumb";
import { PermissinContext } from "../App";

interface LayoutContentProps {
  children: ReactNode;
  breadcrumb?: boolean;
}

function MainContent(props: LayoutContentProps) {
  const { children, breadcrumb = true } = props;

  const { initRoute } = useContext(PermissinContext);

  const routes = useBreadcrumb(initRoute);

  const styles = {
    margin: "16px 24px",
  };

  return (
    <React.Fragment>
      {breadcrumb && <PageHeader title={false} breadcrumb={{ routes }} />}
      <div style={styles}>{children}</div>
    </React.Fragment>
  );
}

export default MainContent;
