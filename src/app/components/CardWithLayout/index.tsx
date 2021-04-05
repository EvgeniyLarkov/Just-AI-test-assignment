import React, { DragEvent, MouseEventHandler } from 'react';
import ProfileCard, { ProfileCardProps } from '../ProfileCard';
import useStyles from './styles';

export interface CardWithLayoutProps extends ProfileCardProps {
  handleOver: (ev: DragEvent<HTMLElement>) => void,
  handleDrop: (ev: DragEvent<HTMLElement>) => void,
  handleRemove?: MouseEventHandler<HTMLButtonElement>
}

const CardWithLayout: React.FC<CardWithLayoutProps> = (props: CardWithLayoutProps) => {
  const {
    email, regdate, avatar, children, handleRemove, handleOver, handleDrop,
  } = props;
  const styles = useStyles();
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
      >
        {children}
      </ProfileCard>
    </div>
  );
};

export default CardWithLayout;
