import React from 'react';
import SelectedSectionView from './SelectedSectionView';
import useStyles from './styles';
import UseSelectedSection from './useSelectedSection';

const ProfilesSection: React.FC = () => {
  const {
    users,
    overId,
    isDragging,
    handlers,
  } = UseSelectedSection();
  const styles = useStyles({ isDragging });

  return (
    <SelectedSectionView
      users={users}
      styles={styles}
      overId={overId}
      isDragging={isDragging}
      handlers={handlers}
    />
  );
};

export default ProfilesSection;
