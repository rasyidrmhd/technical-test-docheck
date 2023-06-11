import React from "react";
import { Icon } from "./Icon";

export const Header: React.FC = () => {
  return (
    <div className="header-box">
      <text className="title">Todo List App</text>
      <form className="search-box" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search task" className="input-search" />
        <button type="submit" className="button-search">
          <Icon icon="search" color="white" size="20px" weight="600" />
        </button>
      </form>
    </div>
  );
};
