import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const MeFooter = (props: any) => {
  const { title, company } = props;

  return (
    <Footer style={{ textAlign: "center", color: "rgba(0,0,0,.4)" }}>
      {title} &copy;{new Date().getFullYear()} {company}
    </Footer>
  );
};

export default MeFooter;
