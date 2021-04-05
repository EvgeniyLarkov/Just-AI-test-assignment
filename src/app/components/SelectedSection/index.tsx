import React from 'react';
import SelectedSectionView from './SelectedSectionView';
import useStyles from './styles';
import UseSelectedSection from './useSelectedSection';
import {
  useDragOverHandler,
  useDragEnterHandler,
  useDragDropHandler,
  useDragStartHandler,
  useDragEndHandler,
} from '../../hooks/useDrag';

const ProfilesSection: React.FC = () => {
  const {
    users, handleInsert, isDragging, handleRemove, handleMove, onDragEnd, onDragStart,
  } = UseSelectedSection();
  const styles = useStyles({ isDragging });

  const handleEnter = useDragEnterHandler();
  const handleDrop = useDragDropHandler;
  const handleStart = useDragStartHandler;
  const handleEnd = useDragEndHandler(onDragEnd);
  const handleOver = useDragOverHandler();

  return (
    <SelectedSectionView
      users={users}
      styles={styles}
      isDragging={isDragging}
      onDragStart={onDragStart}
      handleOver={handleOver}
      handleEnter={handleEnter}
      handleDrop={handleDrop}
      handleInsert={handleInsert}
      handleRemove={handleRemove}
      handleStart={handleStart}
      handleEnd={handleEnd}
      handleMove={handleMove}
    />
  );
};

export default ProfilesSection;
