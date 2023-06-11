import React from "react";
import { Icon } from "./Icon";

const AddButton: React.FC = () => {
  return (
    <button className="button-add">
      <Icon icon="add" color="white" size="44px" />
    </button>
  );
};

export default AddButton;
