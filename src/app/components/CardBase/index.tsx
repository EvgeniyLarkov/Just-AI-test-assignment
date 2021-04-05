import React, { MouseEventHandler, ReactNode } from 'react';
import CardBaseView from './CardBaseView';
import useStyles from './styles';

export interface CardBaseProps {
  regdate: string
  email: string
  avatar: string
  children: ReactNode
  handleRemove?: MouseEventHandler<HTMLButtonElement>,
}

const ProfileCard: React.FC<CardBaseProps> = (
  props: CardBaseProps,
) => {
  const {
    children, regdate, email, avatar, handleRemove,
  } = props;
  const styles = useStyles({ src: avatar });

  return (
    <CardBaseView
      regdate={regdate}
      email={email}
      styles={styles}
      handleRemove={handleRemove}
    >
      {children}
    </CardBaseView>
  );
};

export default React.memo(ProfileCard);
