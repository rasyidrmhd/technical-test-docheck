import React from "react";
import { Icon } from "./Icon";

const AddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="button-add" onClick={onClick}>
      <Icon icon="add" color="white" size="44px" />
    </button>
  );
};

export default AddButton;
