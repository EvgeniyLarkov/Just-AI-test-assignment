import React, { DragEvent, MouseEventHandler } from 'react';
import type { useDragDropHandler, useDragStartHandler } from 'app/utils/hooks/useDrag';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getStringFromDate } from 'app/utils/dateHelper';
import CardWithLayout from '../CardWithLayout';
import { UserInterface } from '../../redux/ducks/types';
import useStyles from './styles';

export interface SelectedSectionViewProps {
  styles: ReturnType<typeof useStyles>,
  users: UserInterface[],
  overId: string | undefined,
  isDragging: boolean,
  onDragStart: () => void,
  onDragOver: (id?: string) => (ev: DragEvent<HTMLElement>) => void,
  handleEnd: (ev: DragEvent<HTMLElement>) => void,
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
    overId,
    isDragging,
    onDragStart,
    onDragOver,
    handleDrop,
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
    onDragOver={onDragOver()}
    onDrop={handleDrop(handleInsert())}
  >
    <div className={styles.inner}>
      <TransitionGroup>
        {users.map((user, index) => (

          <CSSTransition
            key={user.id}
            timeout={1000}
            classNames={{
              enter: styles.enter,
              enterActive: styles.enterActive,
              exit: styles.exit,
              exitActive: styles.exitActive,
            }}
          >
            <CardWithLayout
              key={user.id}
              regdate={getStringFromDate(user.regdate)}
              email={user.email}
              avatar={user.picture}
              isOver={overId === user.id}
              isDragging={isDragging}
              handleRemove={handleRemove(user.id)}
              handleOver={onDragOver(user.id)}
              handleDrop={handleDrop(handleMove(index))}
              handleDragStart={handleStart(user.id, onDragStart)}
              handleDragEnd={handleEnd}
            >
              {`${user.name} ${user.surname}`}
            </CardWithLayout>
          </CSSTransition>

        ))}
      </TransitionGroup>
    </div>
  </div>
);

export default SelectedSectionView;
