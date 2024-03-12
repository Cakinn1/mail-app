import { ReactNode, createContext, useState } from "react";

interface ContextProps {
  buttonSelectValue: string;
  setButtonSelectValue: (value: string) => void;
}

export const inboxContext = createContext<ContextProps>({
  buttonSelectValue: "",
  setButtonSelectValue: () => "",
});

export default function InboxProvider({ children }: { children: ReactNode }) {
  const [buttonSelectValue, setButtonSelectValue] = useState<string>("");
  const contextValue = { buttonSelectValue, setButtonSelectValue };
  return (
    <inboxContext.Provider value={contextValue}>
      {children}
    </inboxContext.Provider>
  );
}
