import React, { createContext, useContext, useState } from "react";
import { initialSession, ISession } from "../interfaces/ISession";

/* tslint:disable:no-empty */
export const SessionContext = createContext<[ISession, (session: ISession) => void]>([initialSession, () => {}]);
export const useSessionContext = () => useContext(SessionContext);

export const SessionContextProvider: React.FC = (props) => {
  const [sessionState, setSessionState] = useState(initialSession);
  const defaultSessionContext: [ISession, typeof setSessionState]  = [sessionState, setSessionState];

  return (
    <SessionContext.Provider value={defaultSessionContext}>
      {props.children}
    </SessionContext.Provider>
  );
};
