import {
  DragEvent, useMemo, useRef, useState, MouseEventHandler,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedStates, UserInterface } from 'app/redux/ducks/types';
import { RootState } from 'app/redux/ducks';
import { AppDispatch } from 'app/redux/store';
import {
  dragEnd, dragStart, insertBefore, remove,
} from 'app/redux/ducks/selected';
import {
  dragDropHandler,
} from '../../utils/hooks/useDrag';

export interface UseSelectedSectionInterface {
  users: UserInterface[],
  overId: string | undefined,
  isEmpty: boolean,
  isDragging: boolean,
  handlers: MemoCbRef
}

export interface MemoCbRef {
  [x: string]: Handlers
}

interface Handlers {
  handleRemove: MouseEventHandler<HTMLButtonElement>
  onDragOver: (ev: DragEvent<HTMLElement>) => void,
  onDragStart: () => void,
  onDragEnd: () => void,
  onDragDrop: ReturnType<typeof dragDropHandler>,
}

const UseSelectedSection = (): UseSelectedSectionInterface => {
  const { state, allIds, isDragging } = useSelector(({ selected }: RootState) => selected);
  const { data } = useSelector(({ profiles }: RootState) => profiles);

  const [overId, setOverId] = useState<string | undefined>();

  const timerRef = useRef<number>();
  const memoCbRef = useRef<MemoCbRef>({} as MemoCbRef);

  const dispatch: AppDispatch = useDispatch();

  const onDragOver = (id?: string) => (ev: DragEvent<HTMLElement>) => {
    if (timerRef.current === undefined) {
      timerRef.current = Date.now();
    }
    if (Date.now() - timerRef.current > 100) {
      timerRef.current = Date.now();
      setOverId(id);
    }

    ev.preventDefault();
    ev.stopPropagation();
  };

  const handleRemove = (id: string) => () => {
    dispatch(remove({ id }));
  };

  const handleInsertBefore = (target: string) => (source: string) => {
    if (target === 'root') {
      dispatch(insertBefore({ source }));
    } else {
      dispatch(insertBefore({ source, target }));
    }
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

  const memo = useMemo(() => {
    [...allIds, 'root'].forEach((id) => {
      if (!memoCbRef.current[id]) {
        const handlers = {} as Handlers;
        handlers.handleRemove = handleRemove(id);
        handlers.onDragOver = onDragOver(id);
        handlers.onDragStart = onDragStart;
        handlers.onDragEnd = onDragEnd;
        handlers.onDragDrop = dragDropHandler(handleInsertBefore(id));
        memoCbRef.current[id] = handlers;
      }
    });

    return memoCbRef.current;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allIds]);

  return {
    users,
    overId,
    isEmpty,
    isDragging,
    handlers: memo,
  };
};

export default UseSelectedSection;
