import React, { DragEvent, MouseEventHandler } from 'react';
import CardBase from '../CardBase';
import { UserInterface } from '../../redux/ducks/types';
import useStyles from './styles';

export interface SelectedSectionViewProps {
  styles: ReturnType<typeof useStyles>,
  users: UserInterface[],
  handleOver: (ev: DragEvent<HTMLElement>) => void,
  handleEnter: (ev: DragEvent<HTMLElement>) => void,
  handleDrop: (ev: DragEvent<HTMLElement>) => void,
  handleRemove: (ids: string) => MouseEventHandler<HTMLButtonElement>
}

const SelectedSectionView: React.FC<SelectedSectionViewProps> = (
  {
    styles, users, handleDrop, handleOver, handleEnter, handleRemove,
  }: SelectedSectionViewProps,
) => (
  <div
    className={styles.root}
    onDragEnter={handleEnter}
    onDragOver={handleOver}
    onDrop={handleDrop}
  >
    {users.map((user) => (
      <CardBase
        key={user.id}
        regdate={user.regdate}
        email={user.email}
        avatar={user.picture}
        handleRemove={handleRemove(user.id)}
      >
        {`${user.name} ${user.surname}`}
      </CardBase>
    ))}
  </div>
);

export default SelectedSectionView;
