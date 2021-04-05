import React from 'react';
import SelectedSectionView from './SelectedSectionView';
import useStyles from './styles';
import UseSelectedSection from './useSelectedSection';
import { useDragOverHandler, useDragEnterHandler, useDragDropHandler } from '../../hooks/useDrag';

const ProfilesSection: React.FC = () => {
  const {
    users, handleInsert, isDragging, handleRemove,
  } = UseSelectedSection();
  const styles = useStyles({ isDragging });

  const handleEnter = useDragEnterHandler();
  const handleDrop = useDragDropHandler;
  const handleOver = useDragOverHandler();

  return (
    <SelectedSectionView
      users={users}
      styles={styles}
      handleOver={handleOver}
      handleEnter={handleEnter}
      handleDrop={handleDrop}
      handleInsert={handleInsert}
      handleRemove={handleRemove}
    />
  );
};

export default ProfilesSection;
