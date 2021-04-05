import React from 'react';
import SelectedSectionView from './SelectedSectionView';
import useStyles from './styles';
import UseSelectedSection from './useSelectedSection';
import { useDragDropHandler, useDragOverHandler, useDragEnterHandler } from '../../hooks/useDrag';

const ProfilesSection: React.FC = () => {
  const {
    users, handleInsert, isDragging, handleRemove,
  } = UseSelectedSection();
  const styles = useStyles({ isDragging });

  const handleDrop = useDragDropHandler(handleInsert);
  const handleEnter = useDragEnterHandler();
  const handleOver = useDragOverHandler();

  return (
    <SelectedSectionView
      users={users}
      styles={styles}
      handleOver={handleOver}
      handleEnter={handleEnter}
      handleDrop={handleDrop}
      handleRemove={handleRemove}
    />
  );
};

export default ProfilesSection;
