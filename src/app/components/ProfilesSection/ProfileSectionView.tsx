import React from 'react';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getStringFromDate } from 'app/utils/dateHelper';
import { useDragEndHandler, useDragStartHandler } from 'app/utils/hooks/useDrag';
import { UserInterface } from '../../redux/ducks/types';
import ProfileCard from '../ProfileCard';
import { Accordion, AccordionSummary, useStyles } from './styles';

export interface ProfileSectionViewProps {
  users: Record<string, UserInterface[]>
  styles: ReturnType<typeof useStyles>,
  isSearching: boolean,
  searchValue: string,
  handleDragStart: typeof useDragStartHandler,
  handleDragEnd: typeof useDragEndHandler,
  onDragStart: () => void,
  onDragEnd: () => void,
}

const transionProps = { unmountOnExit: true, timeout: 500 };

const getHighlightedText = (text: string, highlight: string): { __html: string } => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  const result = parts.map((part) => ((part === highlight) ? (`<b>${part}</b>`) : part));
  return { __html: result.join('') };
};

const ProfileSectionView: React.FC<ProfileSectionViewProps> = ({
  users, searchValue, isSearching, handleDragStart, onDragStart, handleDragEnd, onDragEnd, styles,
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
        <div className={styles.root}>
          {users[cat as keyof typeof users].map(
            (user) => (
              <ProfileCard
                regdate={getStringFromDate(user.regdate)}
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
        </div>
      </Accordion>
    ))}
  </div>
);

export default ProfileSectionView;
