import {
  DragEvent, MouseEventHandler, useCallback, useMemo, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/redux/ducks';
import { AppDispatch } from 'app/redux/store';
import {
  add, dragEnd, dragStart, move, remove,
} from 'app/redux/ducks/selected';
import { SelectedStates, UserInterface } from 'app/redux/ducks/types';

export interface UseSelectedSectionInterface {
  users: UserInterface[],
  overId: string | undefined,
  isEmpty: boolean,
  isDragging: boolean,
  onDragStart: () => void,
  onDragEnd: () => void,
  onDragOver: (id?: string) => (ev: DragEvent<HTMLElement>) => void,
  handleInsert: (pos?: number) => (id: string | undefined) => void,
  handleRemove: (id: string) => MouseEventHandler<HTMLButtonElement>,
  handleMove: (pos: number) => (id: string) => void,
}

const UseSelectedSection = (): UseSelectedSectionInterface => {
  const { state, allIds, isDragging } = useSelector(({ selected }: RootState) => selected);
  const { data } = useSelector(({ profiles }: RootState) => profiles);
  const [overId, setOverId] = useState<string | undefined>();
  const timerRef = useRef<number>();
  const dispatch: AppDispatch = useDispatch();

  const handleInsert = (position = allIds.length) => (id: string | undefined) => {
    if (!id || allIds.includes(id)) {
      return;
    }

    dispatch(add({ id, position }));
  };

  const onDragOver = useCallback((id?: string) => (ev: DragEvent<HTMLElement>) => {
    if (timerRef.current === undefined) {
      timerRef.current = Date.now();
    }
    if (Date.now() - timerRef.current > 100) {
      console.log(id);
      timerRef.current = Date.now();
      setOverId(id);
    }

    ev.preventDefault();
    ev.stopPropagation();
  }, []);

  const handleRemove = (id: string) => () => {
    dispatch(remove({ id }));
  };

  const handleMove = (position = allIds.length) => (id: string) => {
    dispatch(move({ id, position }));
  };

  const onDragStart = () => {
    dispatch(dragStart());
  };

  const onDragEnd = () => {
    setOverId(undefined);
    dispatch(dragEnd());
  };

  const isEmpty = state === SelectedStates.idle;

  const users = useMemo(() => allIds.map((id) => data[id]), [allIds, data]);

  return {
    users,
    overId,
    isEmpty,
    isDragging,
    handleInsert,
    handleRemove,
    handleMove,
    onDragOver,
    onDragStart,
    onDragEnd,
  };
};

export default UseSelectedSection;
