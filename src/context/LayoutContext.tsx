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
  breadCrumb:string[];
  handleBreadCrumb:(list:string[])=>void
};
const LayoutContext = createContext<LayoutContextDataType>({
  toggle: true,
  toggleIn: () => {},
  toggleOut: () => {},
  breadCrumb:[],
  handleBreadCrumb:([])=>{}
});

const LayoutDataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [breadCrumb,setBreadcrumb] = useState<string[]>(["Dashboard"])
  const toggleIn = () => {
    setToggle(false);
  };
  const toggleOut = () => {
    setToggle(true);
  };
  const handleBreadCrumb = (list:string[])=>{
      setBreadcrumb(list)
  }
  return (
    <LayoutContext.Provider value={{ toggle, toggleIn, toggleOut,breadCrumb ,handleBreadCrumb}}>
      {children}
    </LayoutContext.Provider>
  );
};

export { type LayoutContextDataType, LayoutContext, LayoutDataProvider };
