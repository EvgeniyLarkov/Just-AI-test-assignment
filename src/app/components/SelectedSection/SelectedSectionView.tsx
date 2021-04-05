import React, { DragEvent, MouseEventHandler } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import type { useDragDropHandler, useDragStartHandler } from 'app/hooks/useDrag';
import CardWithLayout from '../CardWithLayout';
import { UserInterface } from '../../redux/ducks/types';
import useStyles from './styles';

export interface SelectedSectionViewProps {
  styles: ReturnType<typeof useStyles>,
  users: UserInterface[],
  isDragging: boolean,
  onDragStart: () => void,
  handleEnd: (ev: DragEvent<HTMLElement>) => void,
  handleOver: (ev: DragEvent<HTMLElement>) => void,
  handleEnter: (ev: DragEvent<HTMLElement>) => void,
  handleStart: typeof useDragStartHandler,
  handleDrop: typeof useDragDropHandler,
  handleMove: (pos: number) => (id: string) => void,
  handleInsert: (pos?: number) => (id: string | undefined) => void,
  handleRemove: (ids: string) => MouseEventHandler<HTMLButtonElement>
}

const SelectedSectionView: React.FC<SelectedSectionViewProps> = (
  {
    styles,
    users,
    isDragging,
    onDragStart,
    handleDrop,
    handleOver,
    handleEnter,
    handleRemove,
    handleInsert,
    handleStart,
    handleEnd,
    handleMove,
  }: SelectedSectionViewProps,
) => (
  <div
    className={styles.root}
    onDragEnter={handleEnter}
    onDragOver={handleOver}
    onDrop={handleDrop(handleInsert())}
  >

    <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {users.map((user, index) => (
        <CardWithLayout
          key={user.id}
          regdate={user.regdate}
          email={user.email}
          avatar={user.picture}
          isDragging={isDragging}
          handleRemove={handleRemove(user.id)}
          handleOver={handleOver}
          handleDrop={handleDrop(handleMove(index))}
          handleDragStart={handleStart(user.id, onDragStart)}
          handleDragEnd={handleEnd}
        >
          {`${user.name} ${user.surname}`}
        </CardWithLayout>
      ))}
    </CSSTransitionGroup>

  </div>
);

export default SelectedSectionView;
