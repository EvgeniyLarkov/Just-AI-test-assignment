import React, { useCallback } from 'react';
import { useDragEndHandler, useDragStartHandler } from 'app/hooks/useDrag';
import ProfileSectionView from './ProfileSectionView';
import useProfileSection from './useProfileSection';

const ProfilesSection: React.FC = () => {
  const {
    isSearching, searchValue, users, onDragStart, onDragEnd,
  } = useProfileSection();

  const handleDragStart = useCallback(useDragStartHandler, []);
  const handleDragEnd = useCallback(useDragEndHandler, []);

  return (
    <ProfileSectionView
      users={users}
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
