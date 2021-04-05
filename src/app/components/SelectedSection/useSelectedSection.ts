import { MouseEventHandler, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/redux/ducks';
import { AppDispatch } from 'app/redux/store';
import {
  add, dragEnd, dragStart, move, remove,
} from 'app/redux/ducks/selected';
import { SelectedStates, UserInterface } from 'app/redux/ducks/types';

export interface UseSelectedSectionInterface {
  users: UserInterface[],
  isEmpty: boolean,
  isDragging: boolean,
  onDragStart: () => void,
  onDragEnd: () => void,
  handleInsert: (pos?: number) => (id: string | undefined) => void,
  handleRemove: (id: string) => MouseEventHandler<HTMLButtonElement>,
  handleMove: (pos: number) => (id: string) => void,
}

const UseSelectedSection = (): UseSelectedSectionInterface => {
  const { state, allIds, isDragging } = useSelector(({ selected }: RootState) => selected);
  const { data } = useSelector(({ profiles }: RootState) => profiles);

  const dispatch: AppDispatch = useDispatch();

  const handleInsert = (position?: number) => (id: string | undefined) => {
    if (!id || allIds.includes(id)) {
      return;
    }

    dispatch(add({ id, position }));
  };

  const handleRemove = (id: string) => () => {
    dispatch(remove({ id }));
  };

  const handleMove = (position: number) => (id: string) => {
    dispatch(move({ id, position }));
  };

  const onDragStart = () => {
    dispatch(dragStart());
  };

  const onDragEnd = () => {
    dispatch(dragEnd());
  };

  const isEmpty = state === SelectedStates.idle;

  const users = useMemo(() => allIds.map((id) => data[id]), [allIds, data]);

  return {
    users, isEmpty, isDragging, handleInsert, handleRemove, handleMove, onDragStart, onDragEnd,
  };
};

export default UseSelectedSection;
