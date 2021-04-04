import React from 'react';
import SelectedSectionView from './SelectedSectionView';
import useStyles from './styles';
import UseSelectedSection from './useSelectedSection';
import { useDragDropHandler, useDragOverHandler } from '../../hooks/useDrag';

const ProfilesSection: React.FC = () => {
  const { users } = UseSelectedSection();
  const styles = useStyles();
  const handleOver = useDragOverHandler();
  const handleDrop = useDragDropHandler(console.log);

  return (
    <SelectedSectionView
      users={users}
      styles={styles}
      handleOver={handleOver}
      handleDrop={handleDrop}
    />
  );
};

export default ProfilesSection;
