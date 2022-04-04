import React, { useContext } from "react";
import reducer, { modalActions, modalState } from "./components/helper/reducer";
import useValue from "./components/helper/hook/useValue";
interface contextProp {
  dialog: modalState;
  dispatchDialog: (action: modalActions) => null;
  isLoading: boolean;
  setLoading: (newState: boolean) => any;
  isConnected: boolean;
  setConnected: (newState: boolean) => any;
  media:{isTrue:boolean, width:string|number}
  setMedia:(newState:{isTrue:boolean, width:string|number})=>any
}

const AppContext = React.createContext({} as contextProp);
export const AppProvider = (props: any) => {
  const value = useValue();

  return (
    <AppContext.Provider value={value}> {props.children}</AppContext.Provider>
  );
};

const retrieveState = () => {};

export const useContextObject = () => useContext(AppContext);
``;
