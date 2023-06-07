import React, { ReactNode } from "react";

export interface ItemProps {
  name: string;
  qty: number;
  price: number | string;
}

const initialContext: ItemProps = {
  name: "bread",
  qty: 20,
  price: "$3",
};
export const ItemContext = React.createContext(initialContext);

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  return <ItemContext.Provider value={initialContext}>{children}</ItemContext.Provider>;
};
