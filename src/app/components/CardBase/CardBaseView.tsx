import React, { PropsWithChildren } from 'react';
import useStyles from './styles';

export interface CardBaseViewProps {
  regdate: string
  email: string
  styles: ReturnType<typeof useStyles>
}

const CardBaseView: React.FC<PropsWithChildren<CardBaseViewProps>> = (
  {
    children, regdate, email, styles,
  }: PropsWithChildren<CardBaseViewProps>,
) => (
  <article className={styles.root} draggable>
    <div className={styles.avatar} />
    <div className={styles.profileInfo}>
      <span className={styles.textBase}>
        {children}
        {', '}
        дата регистрации
        {' '}
        {regdate}
      </span>
      <span className={styles.textBase}>
        {email}
      </span>
    </div>
  </article>
);

export default CardBaseView;
