import React from "react";

export const Icon: React.FC<{ icon: string; size?: string; weight?: string; color?: string; opacity?: string }> = ({ icon, size, weight, opacity, color = "black" }) => {
  return (
    <text className="material-icons" style={{ fontSize: size, fontWeight: weight, opacity, color }}>
      {icon}
    </text>
  );
};
