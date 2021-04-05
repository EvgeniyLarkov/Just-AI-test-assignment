import React, { DragEvent, MouseEventHandler } from 'react';
import CardBase, { CardBaseProps } from '../CardBase';
import useStyles from './styles';

export interface ProfileCardProps extends CardBaseProps {
  handleRemove?: MouseEventHandler<HTMLButtonElement>
  dragStartHandler?: (ev: DragEvent<HTMLElement>) => void,
  dragEndHandler?: (ev: DragEvent<HTMLElement>) => void
}

const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    children, email, avatar, regdate, dragStartHandler, dragEndHandler, handleRemove,
  } = props;
  const styles = useStyles();

  return (
    <div
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
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
