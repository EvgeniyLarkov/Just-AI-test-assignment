import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/redux/ducks';
import { SearchStates, UserInterface } from 'app/redux/ducks/types';
import { AppDispatch } from 'app/redux/store';
import { dragEnd, dragStart } from 'app/redux/ducks/selected';
import { compareDate } from 'app/utils/dateHelper';

export interface UseProfileSectionInterface {
  users: { [x: string]: UserInterface[] }
  isSearching: boolean
  searchValue: string
  onDragStart: () => void
  onDragEnd: () => void
}
const getCategoryName = (age: number): string => {
  const lowerMatch = Math.floor((age - 1) / 10) * 10;
  return `${lowerMatch + 1}-${lowerMatch + 10}`;
};

const useProfileSection = (): UseProfileSectionInterface => {
  const {
    data,
    allIds: profileIds,
  } = useSelector(({ profiles }: RootState) => profiles);

  const dispatch: AppDispatch = useDispatch();
  const { state, match } = useSelector(({ search }: RootState) => search);

  const isSearching = state === SearchStates.contain;

  const onDragStart = useCallback(() => {
    dispatch(dragStart());
  }, [dispatch]);

  const onDragEnd = useCallback(() => {
    dispatch(dragEnd());
  }, [dispatch]);

  const sortedUsers = useMemo(() => {
    const users = {} as { [x: string]: UserInterface[] };

    for (let i = 0; i < profileIds.length; i += 1) {
      const user = data[profileIds[i]];
      const computedName = getCategoryName(user.regage);

      if (!users[computedName]) {
        users[computedName] = [];
      }

      users[computedName].push(user);
    }

    Object.keys(users).forEach((key) => users[key]
      .sort((a, b) => compareDate(b.regdate, a.regdate)));

    return users;
  }, [data, profileIds]);

  const filteredUsers = useMemo(() => {
    const keys = Object.keys(sortedUsers);
    return keys.reduce<{ [x: string]: UserInterface[] | [] }>((acc, key) => ({
      ...acc,
      [key]: sortedUsers[key].filter(({
        name, surname,
      }) => (name.indexOf(match) !== -1 || surname.indexOf(match) !== -1)),
    }), {});
  }, [match, sortedUsers]);

  return {
    users: isSearching ? filteredUsers : sortedUsers,
    isSearching,
    searchValue: match,
    onDragStart,
    onDragEnd,
  };
};

export default useProfileSection;
