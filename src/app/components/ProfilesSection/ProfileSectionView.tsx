import React from 'react';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDragEndHandler, useDragStartHandler } from 'app/hooks/useDrag';
import { UserInterface } from '../../redux/ducks/types';
import ProfileCard from '../ProfileCard';
import { Accordion, AccordionSummary } from './styles';

/* const onRenderCallback = (
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
): void => {
  console.log({ phase, actualDuration, baseDuration });
}; */

export interface ProfileSectionViewProps {
  users: Record<string, UserInterface[]>
  isSearching: boolean
  searchValue: string,
  handleDragStart: typeof useDragStartHandler,
  handleDragEnd: typeof useDragEndHandler,
  onDragStart: () => void,
  onDragEnd: () => void,
}

const transionProps = { unmountOnExit: true };

const getHighlightedText = (text: string, highlight: string): { __html: string } => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  const result = parts.map((part) => ((part === highlight) ? (`<b>${part}</b>`) : part));
  return { __html: result.join('') };
};

const ProfileSectionView: React.FC<ProfileSectionViewProps> = ({
  users, searchValue, isSearching, handleDragStart, onDragStart, handleDragEnd, onDragEnd,
}: ProfileSectionViewProps) => (
  <div>
    {Object.keys(users).sort().map((cat) => (
      <Accordion
        key={`${cat}`}
        TransitionProps={transionProps}
        disabled={users[cat].length === 0}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="category-control"
        >
          <Typography>{cat}</Typography>
        </AccordionSummary>
        {users[cat as keyof typeof users].map(
          (user) => (
            <ProfileCard
              regdate={user.regdate}
              email={user.email}
              avatar={user.picture}
              key={user.id}
              handleDragStart={handleDragStart(user.id, onDragStart)}
              handleDragEnd={handleDragEnd(onDragEnd)}
            >
              {isSearching
                ? <span dangerouslySetInnerHTML={getHighlightedText(`${user.name} ${user.surname}`, searchValue)} /> // Для производительности
                : `${user.name} ${user.surname}`}
            </ProfileCard>
          ),
        )}
      </Accordion>
    ))}
  </div>
);

export default ProfileSectionView;
