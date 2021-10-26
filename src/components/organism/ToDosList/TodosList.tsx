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
import { SpinnerCircular } from 'spinners-react';


export const TodosList = () => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  const { toDosLists, setToDosLists, setFilteredList } = useToDoLists();
  const { handleToast } = useError();
  const initialListItemState: SingleListModel = {
    name: '',
    task: [],
  };
  const [currentListItem, setCurrentListItem] = useState<SingleListModel>(initialListItemState);
  const [isLoading, setIsLoading] = useState(true);

  console.log('this is todosState', toDosLists);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const results = await getAllTasksList();
      await setToDosLists(results);
      await setFilteredList(results);
      await setTimeout(() => {}, 5000);
      await setIsLoading(false);
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
        {isLoading ? (
          <SpinnerCircular
            style={{
              alignSelf:'center',
              height:'100%'
            }}
            size={80}
            thickness={49}
            speed={51}
            color="rgba(172, 99, 57, 1)"
            secondaryColor="rgba(172, 77, 57, 0.44)"
          />
        ) : toDosLists?.length !== 0 ? (
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
