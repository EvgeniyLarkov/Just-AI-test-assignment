import React from 'react';
import ProfileSectionView from './ProfileSectionView';
import useProfileSection from './useProfileSection';

const ProfilesSection: React.FC = () => {
  const {
    isSearching, searchValue, users,
  } = useProfileSection();
  return (
    <ProfileSectionView
      users={users}
      isSearching={isSearching}
      searchValue={searchValue}
    />
  );
};

export default ProfilesSection;
