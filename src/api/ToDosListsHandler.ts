import { iAxios } from './ApiInterceptor';
import { SingleListModel } from '../providers/ToDosListsProvider';

const GET__TODOS: string = 'https://recruitment.ultimate.systems/to-do-lists';

export const serializeData = (data: any) => {
  const result = data.map((dataItem: SingleListModel) => {
    const serialized: SingleListModel = {
      id: dataItem.id,
      name: dataItem.name,
      created_at: dataItem.created_at.substring(0, 10),
      task: dataItem.task,
    };

    return serialized;
  });

  return result;
};

export const getAllTasksList = async () => {
  try {
    const { data } = await iAxios.get(GET__TODOS);
    return await serializeData(data);
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteList = async (listId: number) => {
  try {
    await iAxios({
      method: 'delete',
      url: `https://recruitment.ultimate.systems/to-do-lists/${listId}`,
    });
  } catch (e) {
    console.log('error occured when delete list');
  }
};

export const search = async (phrase: string) => {
  try {
    await iAxios.get(`https://recruitment.ultimate.systems/to-do-lists?_contains=${phrase}`);
  } catch (e) {
    console.log('error in search bar');
  }
};

type AllowedSearchParams = 'name' | 'created_at';

export const sortBy = async (sortParameter: AllowedSearchParams) => {
  try {
   return  await iAxios.get(`https://recruitment.ultimate.systems/to-do-lists?_sort=${sortParameter}`);
  } catch (e) {
    throw new Error('Sroting error')
  }
};

export const updateItem = async (itemValue: any, id: number) => {
  try {
    await iAxios({
      method: 'put',
      url: `http://localhost:1337/to-do-lists/${id}`,
      data: {
        name: itemValue.name,
        task: itemValue.task,
      },
    });
  } catch (e) {
    throw new Error('Error occured');
  }
};
