import React, { DragEvent, MouseEventHandler } from 'react';
import type { useDragDropHandler } from 'app/hooks/useDrag';
import CardWithLayout from '../CardWithLayout';
import { UserInterface } from '../../redux/ducks/types';
import useStyles from './styles';

export interface SelectedSectionViewProps {
  styles: ReturnType<typeof useStyles>,
  users: UserInterface[],
  handleOver: (ev: DragEvent<HTMLElement>) => void,
  handleEnter: (ev: DragEvent<HTMLElement>) => void,
  handleDrop: typeof useDragDropHandler,
  handleInsert: (pos?: number) => (id: string | undefined) => void,
  handleRemove: (ids: string) => MouseEventHandler<HTMLButtonElement>
}

const SelectedSectionView: React.FC<SelectedSectionViewProps> = (
  {
    styles, users, handleDrop, handleOver, handleEnter, handleRemove, handleInsert,
  }: SelectedSectionViewProps,
) => (
  <div
    className={styles.root}
    onDragEnter={handleEnter}
    onDragOver={handleOver}
    onDrop={handleDrop(handleInsert())}
  >
    {users.map((user, index) => (
      <CardWithLayout
        key={user.id}
        regdate={user.regdate}
        email={user.email}
        avatar={user.picture}
        handleRemove={handleRemove(user.id)}
        handleOver={handleOver}
        handleDrop={handleDrop(handleInsert(index))}
      >
        {`${user.name} ${user.surname}`}
      </CardWithLayout>
    ))}
  </div>
);

export default SelectedSectionView;
