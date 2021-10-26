import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import { SortBtn } from '../../atoms/SortBtn/SortBtn';
import { AddBtn } from '../../atoms/AddBtn/AddBtn';
import { ItemListsWrapper, SearchSectionWrapper, ListWrapper, Paragraph } from './TodosList.styles';
import { useModal } from '../Modal/useModal';
import { SingleListModel, useToDoLists } from '../../../providers/ToDosListsProvider';
import { ToDoListItem } from '../../molecules/ToDoListItem/ToDoListItem';
import { useEffect, useState } from 'react';
import { getAllTasksList } from '../../../api/ToDosListsHandler';
import { useError } from '../../molecules/ErrorMessage/useError';

export const TodosList = () => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  const { toDosLists, setToDosLists, setFilteredList } = useToDoLists();
  const { handleToast } = useError();
  const initialListItemState: SingleListModel = {
    name: '',
    task: [],
  };
  const [currentListItem, setCurrentListItem] = useState<SingleListModel>(initialListItemState);

  console.log('this is todosState', toDosLists);

  useEffect(() => {
    (async () => {
      const results = await getAllTasksList();
      await setToDosLists(results);
      await setFilteredList(results);
      await handleToast('Updated');
    })();
  }, [setToDosLists]);

  return (
    <ItemListsWrapper>
      <SearchSectionWrapper>
        <SearchBar />
        <SortBtn />
      </SearchSectionWrapper>
      <ListWrapper>
        {toDosLists?.length !== 0 ? (
          toDosLists?.map((todoItem) => {
            return (
              <ToDoListItem
                onClick={() => {
                  handleOpenModal();
                  setCurrentListItem(todoItem);
                }}
                key={todoItem.id}
                toDosList={todoItem}
              />
            );
          })
        ) : (
          <Paragraph>This list is empty</Paragraph>
        )}
        {isOpen ? <Modal listItem={currentListItem} handleCloseModal={handleCloseModal} /> : null}

        <AddBtn
          handleClick={() => {
            handleOpenModal();
            setCurrentListItem(initialListItemState);
          }}
        />
      </ListWrapper>
    </ItemListsWrapper>
  );
};
