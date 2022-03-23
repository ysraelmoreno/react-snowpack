import React from "react";
import "./styles.scss";

function Header({ children }: { children: React.ReactNode }) {
  return <header>{children}</header>;
}

export default Header;
