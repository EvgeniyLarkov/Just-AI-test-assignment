import React, { DragEvent } from 'react';
import CardBase, { CardBaseProps } from '../CardBase';
import useStyles from './styles';

export interface CardProfileProps extends CardBaseProps {
  dragStartHandler: (ev: DragEvent<HTMLElement>) => void,
  dragEndHandler: (ev: DragEvent<HTMLElement>) => void
}

const CardProfile: React.FC<CardProfileProps> = (props: CardProfileProps) => {
  const {
    children, email, avatar, regdate, dragStartHandler, dragEndHandler,
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
      >
        {children}
      </CardBase>
    </div>
  );
};

export default React.memo(CardProfile);
