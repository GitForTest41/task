import { createContext, FC, useContext, useState } from 'react';

export type SingleTask = {
  id: number;
  name: string;
  isDone: boolean;
};

export type SingleListModel = {
  id?: any;
  name: string;
  created_at?: any;
  task: SingleTask[];
};

interface ToDoListsState {
  toDosLists: SingleListModel[];
  filteredList: SingleListModel[];
  setFilteredList: any;
  setToDosLists: any;
  deleteListFromState: any;
  filterLists: (string) => any;
}

export const ToDosListContext = createContext<Partial<ToDoListsState>>({});

export const useToDoLists = () => {
  const toDosLists = useContext(ToDosListContext);

  if (!toDosLists) throw new Error('useToDosList must be used inside ToDosListsProvider');

  return toDosLists;
};

export const ToDosListsProvider: FC = ({ children }) => {
  const [toDosLists, setToDosLists] = useState<SingleListModel[]>([]);
  const [filteredList, setFilteredList] = useState<SingleListModel[]>([]);

  const deleteListFromState = (idToDelete: number): void => {
    const result: SingleListModel[] = toDosLists.filter((item: SingleListModel) => item.id !== idToDelete);
    setToDosLists(result);
  };

  return (
    <ToDosListContext.Provider
      value={{
        toDosLists,
        deleteListFromState,
        setToDosLists,
        setFilteredList,
        filteredList,
      }}
    >
      {children}
    </ToDosListContext.Provider>
  );
};
