import React, { DragEvent, MouseEventHandler } from 'react';
import ProfileCard, { ProfileCardProps } from '../ProfileCard';
import useStyles from './styles';

export interface CardWithLayoutProps extends ProfileCardProps {
  isDragging?: boolean,
  isOver?: boolean,
  onDragStart: () => void,
  onDragEnd: () => void,
  handleOver?: (ev: DragEvent<HTMLElement>) => void,
  handleDrop?: (ev: DragEvent<HTMLElement>) => void,
  handleRemove?: MouseEventHandler<HTMLButtonElement>
}

const CardWithLayout: React.FC<CardWithLayoutProps> = (props: CardWithLayoutProps) => {
  const {
    email,
    name,
    surname,
    id,
    regdate,
    avatar,
    isOver,
    isDragging,
    handleRemove,
    handleOver,
    handleDrop,
    onDragStart,
    onDragEnd,
  } = props;
  const styles = useStyles({ isDragging, isOver });
  return (
    <div className={styles.root}>
      <div
        className={styles.continer}
        onDrop={handleDrop}
        onDragOver={handleOver}
      />
      <ProfileCard
        name={name}
        surname={surname}
        regdate={regdate}
        id={id}
        email={email}
        avatar={avatar}
        handleRemove={handleRemove}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};

export default React.memo(CardWithLayout);
