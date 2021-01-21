import React, { ReactNode } from "react";

interface LayoutContentProps {
  children: ReactNode;
  breadcrumb?: boolean;
}

function MainContent(props: LayoutContentProps) {
  const { children, breadcrumb = true } = props;

  const styles = {
    margin: "16px 24px",
  };

  return (
    <React.Fragment>
      <div style={styles}>{children}</div>
    </React.Fragment>
  );
}

export default MainContent;
