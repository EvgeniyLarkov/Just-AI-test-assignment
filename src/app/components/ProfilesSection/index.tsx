import React from 'react';
import ProfileSectionView from './ProfileSectionView';
import useProfileSection from './useProfileSection';
import { useStyles } from './styles';

const ProfilesSection: React.FC = () => {
  const {
    isSearching, searchValue, users, onDragStart, onDragEnd,
  } = useProfileSection();

  const styles = useStyles();

  return (
    <ProfileSectionView
      users={users}
      styles={styles}
      isSearching={isSearching}
      searchValue={searchValue}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default ProfilesSection;
