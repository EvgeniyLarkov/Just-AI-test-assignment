import React from 'react';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getStringFromDate } from 'app/utils/dateHelper';
import { UserInterface } from '../../redux/ducks/types';
import ProfileCard from '../ProfileCard';
import { Accordion, AccordionSummary, useStyles } from './styles';

export interface ProfileSectionViewProps {
  users: Record<string, UserInterface[]>
  styles: ReturnType<typeof useStyles>,
  isSearching: boolean,
  searchValue: string,
  onDragStart: () => void,
  onDragEnd: () => void,
}

const transionProps = { unmountOnExit: true, timeout: 500 };

const ProfileSectionView: React.FC<ProfileSectionViewProps> = ({
  users, searchValue, onDragStart, onDragEnd, styles,
}: ProfileSectionViewProps) => (
  <div>
    {Object.keys(users).sort().map((cat) => (
      <Accordion
        key={cat}
        TransitionProps={transionProps}
        disabled={users[cat].length === 0}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="category-control"
        >
          <Typography>{cat}</Typography>
        </AccordionSummary>
        <div className={(users[cat].length !== 0) ? styles.root : ''}>
          {users[cat].map(
            (user) => (
              <ProfileCard
                regdate={getStringFromDate(user.regdate)}
                name={user.name}
                surname={user.surname}
                id={user.id}
                email={user.email}
                avatar={user.picture}
                key={user.id}
                searchValue={searchValue}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
              />
            ),
          )}
        </div>
      </Accordion>
    ))}
  </div>
);

export default ProfileSectionView;
