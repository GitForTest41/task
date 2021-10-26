import styled from 'styled-components';
import { serializeData, sortBy } from '../../../api/ToDosListsHandler';
import { useToDoLists } from '../../../providers/ToDosListsProvider';
import { useError } from '../../molecules/ErrorMessage/useError';
import { serialize } from 'v8';

const StyledSortBtn = styled.button`
  cursor: pointer;
  width: 30%;
  height: 40px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
`;

export const SortBtn = () => {
  const { setToDosLists } = useToDoLists();
  const { handleToast, dispatchError } = useError();
  const handleSortList = async () => {
    try {
      const { data } = await sortBy('name');
      const results = await serializeData(data);
      setToDosLists(results);
      await handleToast('this list is sorted  by date');
    } catch (e) {
      dispatchError(e.message);
    }
  };

  return <StyledSortBtn onClick={handleSortList}>Sort</StyledSortBtn>;
};
