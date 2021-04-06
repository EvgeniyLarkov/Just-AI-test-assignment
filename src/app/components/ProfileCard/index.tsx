import React, { DragEvent, MouseEventHandler } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import style from './style.css';

export interface ProfileCardProps {
  children: React.ReactNode,
  email: string,
  avatar: string,
  regdate: string,
  handleRemove?: MouseEventHandler<HTMLButtonElement>
  handleDragStart?: (ev: DragEvent<HTMLElement>) => void,
  handleDragEnd?: (ev: DragEvent<HTMLElement>) => void
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  children,
  email,
  avatar,
  regdate,
  handleDragStart,
  handleDragEnd,
  handleRemove,
} : ProfileCardProps) => (
  <div
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}
    className={style.root}
    draggable
  >
    <article className={style.profile}>
      <img className={style.profile_avatar} alt={email} src={avatar} draggable={false} />
      <div className={style.profile_info}>
        <span className={style.text_base}>
          {children}
          {', '}
          дата регистрации
          {' '}
          {regdate}
        </span>
        <span className={style.text_base}>
          {email}
        </span>
      </div>
      {handleRemove !== undefined && (
        <div className={style.button_remove}>
          <IconButton onClick={handleRemove}>
            <DeleteOutlineIcon fontSize="large" />
          </IconButton>
        </div>
      )}
    </article>
  </div>
);

export default React.memo(ProfileCard);
