import React from 'react';
import CardBase, { CardBaseProps } from '../CardBase';

export interface CardProfileProps extends CardBaseProps {
  id: string;
}

const CardProfile: React.FC<CardProfileProps> = (props: CardProfileProps) => {
  const {
    children, email, avatar, regdate,
  } = props;
  return (
    <div draggable>
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
