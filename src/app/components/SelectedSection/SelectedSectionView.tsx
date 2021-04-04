import React, { DragEvent } from 'react';
import CardBase from '../CardBase';
import { UserInterface } from '../../redux/ducks/types';
import useStyles from './styles';

export interface SelectedSectionViewProps {
  styles: ReturnType<typeof useStyles>,
  users: UserInterface[],
  handleOver: (ev: DragEvent<HTMLElement>) => void,
  handleDrop: (ev: DragEvent<HTMLElement>) => void,
}

const SelectedSectionView: React.FC<SelectedSectionViewProps> = (
  { styles, users, handleOver }: SelectedSectionViewProps,
) => (
  <div className={styles.root} onDragOver={handleOver}>
    {users.map((user) => (
      <CardBase
        key={user.id}
        regdate={user.regdate}
        email={user.email}
        avatar={user.picture}
      >
        {`${user.name} ${user.surname}`}
      </CardBase>
    ))}
  </div>
);

export default SelectedSectionView;
