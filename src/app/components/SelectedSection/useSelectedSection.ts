import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/redux/ducks';
import { AppDispatch } from 'app/redux/store';
import { SelectedStates, UserInterface } from 'app/redux/ducks/types';
import { setSelected } from 'app/redux/ducks/selected';

export interface UseSelectedSectionInterface {
  users: UserInterface[],
  isEmpty: boolean,
  handleDataChange: (ids: string[]) => void,
}

const UseSelectedSection = (): UseSelectedSectionInterface => {
  const { state, allIds } = useSelector(({ selected }: RootState) => selected);
  const { data } = useSelector(({ profiles }: RootState) => profiles);
  const dispatch: AppDispatch = useDispatch();

  const handleDataChange = (ids: string[]) => {
    dispatch(setSelected({ ids }));
  };

  const isEmpty = state === SelectedStates.idle;

  const users = useMemo(() => allIds.map((id) => data[id]), [allIds, data]);

  return {
    users, isEmpty, handleDataChange,
  };
};

export default UseSelectedSection;
