import React, { DragEvent, MouseEventHandler } from 'react';
import CardBase, { CardBaseProps } from '../CardBase';
import useStyles from './styles';

export interface ProfileCardProps extends CardBaseProps {
  handleRemove?: MouseEventHandler<HTMLButtonElement>
  handleDragStart?: (ev: DragEvent<HTMLElement>) => void,
  handleDragEnd?: (ev: DragEvent<HTMLElement>) => void
}

const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    children, email, avatar, regdate, handleDragStart, handleDragEnd, handleRemove,
  } = props;
  const styles = useStyles();

  return (
    <div
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={styles.root}
      draggable
    >
      <CardBase
        regdate={regdate}
        email={email}
        avatar={avatar}
        handleRemove={handleRemove}
      >
        {children}
      </CardBase>
    </div>
  );
};

export default React.memo(ProfileCard);
