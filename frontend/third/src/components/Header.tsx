import React from "react";
import { Icon } from "./Icon";

export const Header: React.FC<{ onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }> = ({ onSubmit }) => {
  return (
    <div className="header-box">
      <text className="title">Todo List App</text>
      <form className="search-box" onSubmit={onSubmit}>
        <input type="text" name="search" placeholder="Search task" className="input-search" />
        <button type="submit" className="button-search">
          <Icon icon="search" color="white" size="20px" weight="600" />
        </button>
      </form>
    </div>
  );
};
