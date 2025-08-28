import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
type LayoutContextDataType = {
  toggle: boolean;
  toggleIn: () => void;
  toggleOut: () => void;
};
const LayoutContext = createContext<LayoutContextDataType>({
  toggle: true,
  toggleIn: () => {},
  toggleOut: () => {},
});

const LayoutDataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const toggleIn = () => {
    setToggle(false);
  };
  const toggleOut = () => {
    setToggle(true);
  };
  return (
    <LayoutContext.Provider value={{ toggle, toggleIn, toggleOut }}>
      {children}
    </LayoutContext.Provider>
  );
};

export { type LayoutContextDataType, LayoutContext, LayoutDataProvider };
