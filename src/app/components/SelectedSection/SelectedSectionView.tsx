import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getStringFromDate } from 'app/utils/dateHelper';
import CardWithLayout from '../CardWithLayout';
import { UserInterface } from '../../redux/ducks/types';
import useStyles from './styles';
import { MemoCbRef } from './useSelectedSection';

export interface SelectedSectionViewProps {
  styles: ReturnType<typeof useStyles>,
  users: UserInterface[],
  overId: string | undefined,
  isDragging: boolean,
  handlers: MemoCbRef
}

const SelectedSectionView: React.FC<SelectedSectionViewProps> = (
  {
    styles,
    users,
    overId,
    isDragging,
    handlers,
  }: SelectedSectionViewProps,
) => (
  <div
    className={styles.root}
    onDragOver={handlers.root.onDragOver}
    onDrop={handlers.root.onDragDrop}
  >
    <div className={styles.inner}>
      <TransitionGroup>
        {users.map((user) => (

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
              name={user.name}
              surname={user.surname}
              id={user.id}
              regdate={getStringFromDate(user.regdate)}
              email={user.email}
              avatar={user.picture}
              isOver={overId === user.id}
              isDragging={isDragging}
              handleRemove={handlers[user.id].handleRemove}
              handleOver={handlers[user.id].onDragOver}
              handleDrop={handlers[user.id].onDragDrop}
              onDragStart={handlers[user.id].onDragStart}
              onDragEnd={handlers[user.id].onDragEnd}
            />
          </CSSTransition>

        ))}
      </TransitionGroup>
    </div>
  </div>
);

export default SelectedSectionView;
