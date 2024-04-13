import React from "react";
import "./Header.scss";

interface IProps {
  cartItemCount: number;
}

const Header: React.FC<IProps> = ({ cartItemCount }) => {
  return (
    <header className="header">
      <h1>ScyllaDB Bookshop</h1>
      <div>
        <span>My Cart ({cartItemCount})</span>
      </div>
    </header>
  );
};

export default Header;
