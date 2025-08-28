import { useContext } from "react";
import { LayoutContext } from "../context";

export const useLayoutData = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
