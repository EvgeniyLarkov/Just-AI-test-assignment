import React, { MouseEventHandler, PropsWithChildren } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import useStyles from './styles';

export interface CardBaseViewProps {
  regdate: string
  email: string
  styles: ReturnType<typeof useStyles>
  handleRemove?: MouseEventHandler<HTMLButtonElement>
}

const CardBaseView: React.FC<PropsWithChildren<CardBaseViewProps>> = (
  {
    children, regdate, email, styles, handleRemove,
  }: PropsWithChildren<CardBaseViewProps>,
) => (
  <article className={styles.root}>
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
    {
    handleRemove !== undefined && (
    <div className={styles.removeButton}>
      <IconButton onClick={handleRemove}>
        <DeleteOutlineIcon fontSize="large" />
      </IconButton>
    </div>
    )
}
  </article>
);

export default CardBaseView;
