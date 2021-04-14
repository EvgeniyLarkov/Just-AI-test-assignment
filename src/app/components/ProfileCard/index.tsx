import React, { MouseEventHandler, useCallback } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { dragEndHandler, dragStartHandler } from 'app/utils/hooks/useDrag';
import style from './style.css';

export interface ProfileCardProps {
  name: string,
  surname: string,
  id: string,
  email: string,
  avatar: string,
  regdate: string,
  searchValue?: string,
  handleRemove?: MouseEventHandler<HTMLButtonElement>
  onDragStart: () => void,
  onDragEnd: () => void,
}

const getHighlightedText = (text: string, highlight: string): { __html: string } => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  const result = parts.map((part) => ((part === highlight) ? (`<b>${part}</b>`) : part));
  return { __html: result.join('') };
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  surname,
  id,
  email,
  avatar,
  regdate,
  searchValue = '',
  onDragStart,
  onDragEnd,
  handleRemove,
} : ProfileCardProps) => {
  const handleDragStart = useCallback(dragStartHandler(id, onDragStart), []);
  const handleDragEnd = useCallback(dragEndHandler(onDragEnd), []);

  return (
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
            {searchValue !== ''
              ? <span dangerouslySetInnerHTML={getHighlightedText(`${name} ${surname}`, searchValue)} /> // Для производительности
              : `${name} ${surname}`}
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
};

export default React.memo(ProfileCard);
