import React, { useMemo } from 'react';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { UserInterface } from '../../redux/ducks/types';
import CardProfile from '../CardProfile';
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
  searchValue: string
}

const transformDate = (date: string) => {
  const [year, month, day] = date.slice(0, 10).split('-');
  const result = [day, month, year].join('.');
  return result;
};

const getHighlightedText = (text: string, highlight: string): { __html: string } => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  const result = parts.map((part) => ((part === highlight) ? (`<b>${part}</b>`) : part));
  return { __html: result.join('') };
};

const ProfileSectionView: React.FC<ProfileSectionViewProps> = (props: ProfileSectionViewProps) => {
  const {
    users, searchValue, isSearching,
  } = props;

  const transionProps = useMemo(() => ({ unmountOnExit: true }), []);

  return (
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
              <CardProfile
                regdate={transformDate(user.regdate)}
                email={user.email}
                avatar={user.picture}
                key={user.id}
                id={user.id}
              >
                {isSearching
                  ? <span dangerouslySetInnerHTML={getHighlightedText(`${user.name} ${user.surname}`, searchValue)} /> // Для производительности
                  : `${user.name} ${user.surname}`}
              </CardProfile>
            ),
          )}
        </Accordion>
      ))}
    </div>
  );
};
export default ProfileSectionView;
