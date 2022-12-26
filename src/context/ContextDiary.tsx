import React from "react";
import { createContext, useState, useCallback } from "react";

interface ITask {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  isChecked: boolean;
}

interface MainContextData {
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const CoreContext = createContext({} as MainContextData);

type Props = {
  children: JSX.Element;
};

function CoreProvider({ children }: Props) {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <CoreContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </CoreContext.Provider>
  );
}

export default CoreProvider;
