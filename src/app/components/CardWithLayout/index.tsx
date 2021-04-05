import React, { DragEvent, MouseEventHandler } from 'react';
import ProfileCard, { ProfileCardProps } from '../ProfileCard';
import useStyles from './styles';

export interface CardWithLayoutProps extends ProfileCardProps {
  isDragging?: boolean,
  handleOver?: (ev: DragEvent<HTMLElement>) => void,
  handleDrop?: (ev: DragEvent<HTMLElement>) => void,
  handleDragStart?: (ev: DragEvent<HTMLElement>) => void,
  handleDragEnd?: (ev: DragEvent<HTMLElement>) => void,
  handleRemove?: MouseEventHandler<HTMLButtonElement>
}

const CardWithLayout: React.FC<CardWithLayoutProps> = (props: CardWithLayoutProps) => {
  const {
    email,
    regdate,
    avatar,
    children,
    isDragging,
    handleRemove,
    handleOver,
    handleDrop,
    handleDragStart,
    handleDragEnd,
  } = props;
  const styles = useStyles({ isDragging });
  return (
    <div className={styles.root}>
      <div
        className={styles.continer}
        onDrop={handleDrop}
        onDragOver={handleOver}
      />
      <ProfileCard
        regdate={regdate}
        email={email}
        avatar={avatar}
        handleRemove={handleRemove}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
      >
        {children}
      </ProfileCard>
    </div>
  );
};

export default CardWithLayout;
