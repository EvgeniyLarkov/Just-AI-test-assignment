import React, { useCallback } from 'react';
import { dragEndHandler, dragStartHandler } from 'app/utils/hooks/useDrag';
import ProfileSectionView from './ProfileSectionView';
import useProfileSection from './useProfileSection';
import { useStyles } from './styles';

const ProfilesSection: React.FC = () => {
  const {
    isSearching, searchValue, users, onDragStart, onDragEnd,
  } = useProfileSection();

  const styles = useStyles();

  const handleDragStart = useCallback(dragStartHandler, []);
  const handleDragEnd = useCallback(dragEndHandler, []);

  return (
    <ProfileSectionView
      users={users}
      styles={styles}
      isSearching={isSearching}
      searchValue={searchValue}
      handleDragStart={handleDragStart}
      handleDragEnd={handleDragEnd}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default ProfilesSection;
